"use client";
import {ErrorBoundary} from "next/dist/client/components/error-boundary";
import Error from "@/app/transactions/error";
import Sidebar, {DRAWER_WIDTH} from "@/components/layout/sidebar";
import {Box} from "@mui/material";
import React from "react";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <ErrorBoundary errorComponent={Error}>
            <Sidebar withFilters={false}/>
            <Box component="main" sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                ml: `${DRAWER_WIDTH}px`,
                backgroundColor: 'background.default'
            }}>
                <Box sx={{flexGrow: 1, pr: '32px', pl: '32px', pt: '32px', pb: '32px'}}>
                    {children}
                </Box>
            </Box>
        </ErrorBoundary>
    );
}
