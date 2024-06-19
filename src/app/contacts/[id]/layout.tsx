"use client";
import {ErrorBoundary} from "next/dist/client/components/error-boundary";
import Error from "@/app/contacts/[id]/error";
import React from "react";
import BoxWrapperRow from "@/components/wrappers/box-wrapper-row";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <ErrorBoundary errorComponent={Error}>
            <BoxWrapperRow sx={{backgroundColor:  'background.default', height: '100%'}}>
                {children}
            </BoxWrapperRow>
        </ErrorBoundary>
    );
}
