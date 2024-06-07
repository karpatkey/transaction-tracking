"use server";
import Datatable from "@/components/datatable";
import CustomTypography from "@/components/custom-typography";
import {Box} from "@mui/material";
import {redirect} from "next/navigation";
import {AppRouterPageRoute, getSession, withPageAuthRequired} from "@auth0/nextjs-auth0";
import {getTransactions} from "@/datawarehouse/service";
import {AppStoreProvider} from "@/providers/app-provider";
import type {AppStore} from "@/stores/use-app-store";
import Sidebar, {DRAWER_WIDTH} from "@/components/layout/sidebar";
import React from "react";

const mapDAOs = {
    'karpatkey DAO': 'Karpatkey',
    'Gnosis Ltd': 'Gnosis LTD',
    'Gnosis DAO': 'GnosisDAO',
    'ENS DAO': 'ENS',
    'Balancer DAO': 'Balancer',
}

const Page: AppRouterPageRoute = withPageAuthRequired(
    async ({
               searchParams,
           }: {
        searchParams: { [key: string]: string | string[] | undefined }
    }) => {
        const session = await getSession()
        const error = session?.error
        const user = session?.user

        if (error) redirect('/500')
        if (!user) redirect('/')

        // get roles from session
        const roles = user?.['http://localhost:3000/roles']
            ? (user?.['http://localhost:3000/roles'] as unknown as string[])
            : []

        const DAOs: string[] = roles

        // get transactions
        const mappedDAOs = DAOs.map((dao) => mapDAOs[dao] || dao)
        const transactions = await getTransactions(mappedDAOs)

        // get unique addresses from all DAOs
        const addresses = transactions.map((transaction) => transaction.address)
        const uniqueAddresses = [...new Set(addresses)]

        // get DAOs and addresses from search params
        let DAOsParams = searchParams.daos as string[] || []
        if (typeof DAOsParams === 'string') {
            DAOsParams = [DAOsParams]
        }

        let addressesParams = searchParams.addresses as string[] || []
        if (typeof addressesParams === 'string') {
            addressesParams = [...addressesParams.split(',')]
        }

        const DAOsSelected = DAOs.map((dao: string) => ({
            value: dao,
            selected: DAOsParams.includes(dao)
        }))

        const addressesSelected = uniqueAddresses.map((address: string) => ({
            value: address,
            selected: addressesParams.includes(address)
        }))

        const mappedDAOsParams = DAOsParams?.map((dao) => mapDAOs[dao] || dao) || []

        // filter transactions by mappedDAOsParams and addressesParams
        let transactionsFiltered = transactions.filter((transaction) => {
            // si esta vacio el filtro de DAOs y de addresses
            const condition1 = mappedDAOsParams.length === 0 && addressesParams.length === 0
            const condition2 = mappedDAOsParams.length > 0 && addressesParams.length === 0
            const condition3 = mappedDAOsParams.length === 0 && addressesParams.length > 0
            const condition4 = mappedDAOsParams.includes(transaction.dao) && addressesParams.includes(transaction.address)

            if (condition1) return true

            // si no esta vacio el filtro de DAOs y esta vacio el filtro de addresses
            if (condition2) return mappedDAOsParams.includes(transaction.dao)

            // si esta vacio el filtro de DAOs y no esta vacio el filtro de addresses
            if (condition3) return addressesParams.includes(transaction.address)

            // si no esta vacio el filtro de DAOs y no esta vacio el filtro de addresses
            return condition4

        })

        const initialStateValues = {
            DAOs: DAOsSelected,
            addresses: addressesSelected,
            transactions: transactions,
            transactionsFiltered: transactionsFiltered
        } as AppStore

        return (
            <AppStoreProvider initialState={initialStateValues}>
                <Sidebar withFilters={true}/>
                <Box
                    gap={1}
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        ml: `${DRAWER_WIDTH}px`,
                        backgroundColor: 'background.default'
                    }}
                >
                    <CustomTypography variant={'h5'}>Transactions</CustomTypography>
                    <Box sx={{
                        color: 'customPalette.black.primary',
                        backgroundColor: 'background.paper',
                    }}>
                        <Datatable transactions={transactionsFiltered}/>
                    </Box>
                </Box>

            </AppStoreProvider>
        )
    }, {returnTo: "/"})

export default Page
