"use server";
import {Box, Toolbar} from "@mui/material";
import {redirect} from "next/navigation";
import {AppRouterPageRoute, getSession, withPageAuthRequired} from "@auth0/nextjs-auth0";
import React from "react";
import CustomTypography from "@/components/custom-typography";
import {DAOs as DAOsConfig, mapDAOs} from "@/config/app";
import {AppStoreProvider} from "@/providers/app-provider";
import Sidebar, {DRAWER_WIDTH} from "@/components/layout/sidebar";
import {AppStore} from "@/stores/use-app-store";
import {getTransactions} from "@/datawarehouse/service";
import Datatable from "@/components/datatable";
import {inverse} from "@/utils/object";

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

const Page: AppRouterPageRoute = withPageAuthRequired(
    async ({ params, searchParams,}: Props) => {
        const session = await getSession()
        const error = session?.error
        const user = session?.user

        if (error) redirect('/500')
        if (!user) redirect('/')

        // get roles from session
        const roles = user?.['http://localhost:3000/roles']
            ? (user?.['http://localhost:3000/roles'] as unknown as string[])
            : []

        // DAOs from user roles
        const DAOs: string[] = roles

        // DAO from params
        const DAOId = params.id

        // check if DAO exists
        const DAOItem = DAOsConfig.find((dao: {id: string, name: string}) =>
            dao.name.toLowerCase() === DAOId.toLowerCase() && DAOs.includes(inverse(mapDAOs)[DAOId]))

        if(!DAOItem) {
            return <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px 20px',
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px 20px',
                }}>
                    <CustomTypography variant={'h1'}>DAO not found</CustomTypography>
                </Box>
            </Box>
        }

        // get transactions
        const transactions = await getTransactions()

        // get unique addresses from all DAOs
        const addresses = transactions.map((transaction) => transaction.address)
        const uniqueAddresses = [...new Set(addresses)]
        const addressesSelected = uniqueAddresses.map((address: string) => ({
            value: address,
            selected: true
        }))

        const initialStateValues = {
            DAOs: DAOs,
            addresses: addressesSelected,
            transactions: transactions,
            transactionsFiltered: transactions

        } as AppStore

        return (
            <AppStoreProvider initialState={initialStateValues}>
                <Sidebar DAO={DAOItem}/>
                <Box
                    component="main"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        padding: '24px',
                        width:  `100%`,
                        pl: `${DRAWER_WIDTH + 24}px`,
                        backgroundColor: 'background.default',
                        position: 'absolute',
                    }}
                >
                    <CustomTypography variant={'h5'}>Transactions ({transactions.length})</CustomTypography>
                    <Box sx={{
                        color: 'customPalette.black.primary',
                        backgroundColor: 'background.paper',
                    }}>
                        <Datatable transactions={transactions}/>
                    </Box>
                </Box>
            </AppStoreProvider>
        )

    }, {returnTo: "/"})

export default Page
