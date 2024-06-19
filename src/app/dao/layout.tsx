"use client";
import {ErrorBoundary} from "next/dist/client/components/error-boundary";
import Error from "@/app/dao/error";
import React from "react";
import BoxWrapperColumn from "@/components/wrappers/box-wrapper-column";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <ErrorBoundary errorComponent={Error}>
            <BoxWrapperColumn sx={{
                justifyContent: 'center',  // Center children horizontally
                alignItems: 'center',      // Center children vertically
                backgroundColor:  'background.default',
                flexGrow: 1,
                height: '100%'
            }}>
                {children}
            </BoxWrapperColumn>
        </ErrorBoundary>
    );
}
