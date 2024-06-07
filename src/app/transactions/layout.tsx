"use client";
import {ErrorBoundary} from "next/dist/client/components/error-boundary";
import Error from "@/app/transactions/error";
import React from "react";
import BoxWrapperColumn from "@/components/wrappers/box-wrapper-column";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <ErrorBoundary errorComponent={Error}>
            <BoxWrapperColumn sx={{backgroundColor:  'background.default', height: '100%'}}>
                {children}
            </BoxWrapperColumn>
        </ErrorBoundary>
    );
}
