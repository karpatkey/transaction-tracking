import React from 'react'
import {Box, CssBaseline} from '@mui/material'
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

interface Props {
    children: React.ReactNode;
}

const Layout = async ({children}: Props) => {
    return (
        <Box sx={{display: 'flex', minHeight: '100vh', flexDirection: 'column', backgroundColor: 'background.default'}}>
            <CssBaseline/>
            <Header/>
            <Box component="main" sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                mt: '64px',
                backgroundColor: 'background.default',
                pr: '32px', pl: '32px', pt: '32px', pb: '32px'
            }}>
                {children}
            </Box>
            <Footer/>
        </Box>
    )

}

export default Layout
