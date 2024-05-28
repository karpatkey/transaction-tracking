'use client';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { IBM_Plex_Mono } from 'next/font/google'

const PlexMono = IBM_Plex_Mono({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap'
})

let theme = createTheme({
    palette: {
        primary: {
            main: '#eeeded',
        },
        secondary: {
            main: '#1A1A1A',
        },
        background: {
            paper: '#eeeded',
            default: '#6B6B6B',
        },
        error: {
            main: '#DF5C64'
        },
        info: {
            main: '#2196f3'
        }
    },
    typography: {
        fontFamily: PlexMono.style.fontFamily
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;
