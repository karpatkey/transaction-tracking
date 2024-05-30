"use client";
import React from 'react'
import {Box, Container, CssBaseline, Divider, Toolbar} from '@mui/material'
import Header from "@/components/layout/Header";
import Sidebar, {DRAWER_WIDTH} from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import BoxWrapperColumn from "@/components/wrappers/BoxWrapperColumn";
import {useUser} from "@auth0/nextjs-auth0/client";

interface LayoutProps {
  children: React.ReactNode;
}

const ConnectedUserLayout = ({children}: LayoutProps): React.ReactNode => {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column', backgroundColor: 'background.default' }}>
            <CssBaseline />
            <Header/>
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

const Layout = ({ children }: LayoutProps): React.ReactNode => {
    const {user} = useUser()

    if(user) {
        return <ConnectedUserLayout>{children}</ConnectedUserLayout>
    } else {
        return <DisconnectedUserLayout>{children}</DisconnectedUserLayout>
    }
}

export default Layout
