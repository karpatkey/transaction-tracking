import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter';
import type {Metadata} from "next";
import "./globals.css";
import {StyledRoot} from './styled-root';
import {UserProvider} from '@auth0/nextjs-auth0/client';
import Layout from '@/components/layout/layout';
import {IbmPlexMono} from "@/ui/fonts";

export const metadata: Metadata = {
    title: "Transactions",
    description: "List of transactions",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <UserProvider>
            <body className={`${IbmPlexMono.className}`}>
            <AppRouterCacheProvider options={{key: 'css'}}>
                <StyledRoot>
                    <Layout>
                        {children}
                    </Layout>
                </StyledRoot>
            </AppRouterCacheProvider>
            </body>
        </UserProvider>
        </html>
    );
}
