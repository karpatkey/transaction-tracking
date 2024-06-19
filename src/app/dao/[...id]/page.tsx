"use server";
import {Box} from "@mui/material";
import {redirect} from "next/navigation";
import {AppRouterPageRoute, getSession, withPageAuthRequired} from "@auth0/nextjs-auth0";
import React from "react";
import CustomTypography from "@/components/custom-typography";
import {DAOs as DAOsConfig, DAOType} from "@/config/app";
import {AppStoreProvider} from "@/providers/app-provider";
import Sidebar, {DRAWER_WIDTH} from "@/components/layout/sidebar";
import {AppStore} from "@/stores/use-app-store";
import {getAddresses, getTransactions} from "@/datawarehouse/service";
import Datatable from "@/components/datatable";
import {NotFound} from "@/components/not-found";

type Props = {
    params: { id: string[] }
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

        if(DAOs.length === 0) {
            return <NotFound title={'No DAOs found'} />
        }

        // DAO from params
        const [ DAOId = '' , addressesId] = params.id

        // Check if DAO exists
        const DAOItem = DAOsConfig.find((daoConfig: DAOType) => {
            return daoConfig.name.toLowerCase() === DAOId.toLowerCase()
        })

        if(!DAOItem) {
            return <NotFound />
        }

        // Check if DAO exists in the roles
        if(!DAOItem || !DAOs.includes(DAOItem.role)) {
            return <NotFound />
        }

        // replace %2B with + and split by + plus sign
        const addressesItems = addressesId?.replaceAll('%2B', '+')
            ?.split('+') ?? []

        // Get transactions
        const transactions = await getTransactions(DAOItem.dbId, addressesItems)
        const addresses = await getAddresses(DAOItem.dbId)

        // Get unique addresses from all DAOs
        const uniqueAddresses = [...new Set(addresses)]
        const addressesSelected = uniqueAddresses.map((address: string) => ({
            value: address,
            selected: addressesItems.includes(address)
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
