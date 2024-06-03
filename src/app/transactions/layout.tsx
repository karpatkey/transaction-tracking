"use client";
import BoxWrapperColumn from "@/components/wrappers/BoxWrapperColumn";
import {ErrorBoundary} from "next/dist/client/components/error-boundary";
import Error from "@/app/transactions/error";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <ErrorBoundary errorComponent={Error}>
            <BoxWrapperColumn sx={{backgroundColor: '#eeeded', height: '100%'}}>
                {children}
            </BoxWrapperColumn>
        </ErrorBoundary>
    );
}
