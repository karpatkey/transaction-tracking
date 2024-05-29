import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from "next";
import "./globals.css";
import { StyledRoot } from './StyledRoot';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import LayoutTheme from '@/components/layout/Layout';
import {IbmPlexMono} from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Treasury transactions",
  description: "List of treasury transactions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.11.5/datatables.min.css"/>
      <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script type="text/javascript" src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>
    </head>
    <UserProvider>
      <body className={`${IbmPlexMono.className}`}>
      <AppRouterCacheProvider options={{key: 'css'}}>
        <StyledRoot>
          <LayoutTheme>
            {children}
          </LayoutTheme>
        </StyledRoot>
      </AppRouterCacheProvider>
      </body>
    </UserProvider>
    </html>
  );
}
