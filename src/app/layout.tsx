import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
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
      <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
      />
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
