import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { StyledRoot } from './StyledRoot';


const PlexMono = IBM_Plex_Mono({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

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
      <body className={PlexMono.className}>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <StyledRoot>{children}</StyledRoot>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
