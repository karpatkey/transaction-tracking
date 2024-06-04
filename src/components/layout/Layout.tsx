import React from 'react'
import {Box, CssBaseline} from '@mui/material'
import Header from "@/components/layout/Header";
import Sidebar, {DRAWER_WIDTH} from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import {getSession} from "@auth0/nextjs-auth0";
import AppInitializer from "@/components/AppInitializer";
import {getTransactions} from "@/datawarehouse/service";

interface LayoutProps {
    children: React.ReactNode;
    DAOs?: string[];
    addresses?: string[];
    transactions?: any[];
}

const ConnectedUserLayout = ({children, DAOs, addresses, transactions}: LayoutProps): React.ReactNode => {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column', backgroundColor: 'background.default' }}>
            <CssBaseline />
            <Header/>
            <AppInitializer DAOs={DAOs} addresses={addresses} transactions={transactions}>
                <Sidebar />
                <Box component="main" sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    ml: `${DRAWER_WIDTH}px`,
                    mt: '64px',
                    backgroundColor: 'background.default'
                }}>
                    <Box sx={{ flexGrow: 1, pr: '32px', pl: '32px', pt: '32px', pb: '32px' }}>
                        {children}
                    </Box>
                </Box>
                <Footer />
            </AppInitializer>
        </Box>
    )
}

const DisconnectedUserLayout = ({children}: LayoutProps): React.ReactNode => {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column', backgroundColor: 'background.default' }}>
            <CssBaseline />
            <Header/>
            <Box component="main" sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                mt: '64px',
                backgroundColor: 'background.default'
            }}>
                <Box sx={{ flexGrow: 1, pr: '32px', pl: '32px', pt: '32px', pb: '32px' }}>
                    {children}
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}

const Layout = async({ children }: LayoutProps) => {
    const session = await getSession()
    const user = session?.user

    if (user) {
        const roles = user?.['http://localhost:3000/roles']
            ? (user?.['http://localhost:3000/roles'] as unknown as string[])
            : []

        const DAOs = roles

        const transactions = await getTransactions()

        const addresses = transactions.map((transaction) => transaction.address)
        const uniqueAddresses = [...new Set(addresses)]

        return <ConnectedUserLayout DAOs={DAOs} addresses={uniqueAddresses} transactions={transactions}>{children}</ConnectedUserLayout>
    } else {
        return <DisconnectedUserLayout>{children}</DisconnectedUserLayout>
    }

}

export default Layout
