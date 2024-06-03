'use client';
import { createTheme, responsiveFontSizes, Theme, ThemeOptions } from '@mui/material/styles';
import { IBM_Plex_Mono } from 'next/font/google'

declare module '@mui/material/styles' {
    interface Theme {
        customPalette: {
            black: {
                primary: string;
            };
            grey: {
                primary: string;
                secondary: string;
                dark: string;
                light: string;
            };
        };
    }

    // permite la configuración de `customPalette` en `createTheme`
    interface ThemeOptions {
        customPalette?: {
            black?: {
                primary?: string;
            };
            grey?: {
                primary?: string;
                secondary?: string;
                dark?: string;
                light?: string;
            };
        };
    }
}
const PlexMono = IBM_Plex_Mono({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap'
})

let MyTheme = createTheme({
    palette: {
        background: {
            paper: '#eeeded',
            default: '#eeeded',
        },
        primary: {
            main: '#232323',
        },
        secondary: {
            main: '#6B6B6B',
        },
        error: {
            main: '#DF5C64'
        },
        warning: {
            main: '#F0B065'
        },
        info: {
            main: '#2196f3'
        },
        common: {
            black: '#232323',
            white: '#eeeded'
        },
        success: {
            main: '#54B9A1'
        },
    },
    customPalette: {
        black: {
            primary: '#1A1A1A'
        },
        grey: {
            primary: '#808080',
            secondary: '#7A7A7A',
            dark: '#222222',
            light: '#F5F5F5'
        }
    },
    typography: {
        fontFamily: PlexMono.style.fontFamily,
        h1: {
            fontFamily: 'IBM Plex Mono',
            fontSize: 60,
            fontWeight: 400,
            fontStyle: 'normal',
            color: '#1A1A1A',
        },
        h2: {
            fontFamily: 'IBM Plex Mono',
            fontSize: 48,
            fontWeight: 400,
            fontStyle: 'normal',
            color: '#1A1A1A',
        },
        h3: {
            fontFamily: 'IBM Plex Mono',
            fontSize: 24,
            fontWeight: 300,
            fontStyle: 'normal',
            color: '#1A1A1A',
        },
        h4: {
            fontFamily: 'IBM Plex Mono',
            fontSize: 18,
            fontWeight: 400,
            fontStyle: 'normal',
            color: '#1A1A1A',
        },
        body1: {
            fontFamily: 'IBM Plex Mono',
            fontSize: 18,
            fontWeight: 400,
            fontStyle: 'normal',
            color: '#1A1A1A'
        },
        body2: {
            fontFamily: 'IBM Plex Mono',
            fontSize: 16,
            fontWeight: 400,
            fontStyle: 'normal',
            color: '#1A1A1A'
        },
        subtitle1: {
            fontFamily: 'IBM Plex Mono',
            fontSize: 14,
            fontWeight: 400,
            fontStyle: 'normal',
            color: '#1A1A1A'
        },
        subtitle2: {
            fontFamily: 'IBM Plex Mono',
            fontSize: 12,
            fontWeight: 400,
            fontStyle: 'normal',
            color: '#1A1A1A'
        },
        button: {
            fontFamily: 'IBM Plex Mono',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: 16
        },
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

MyTheme = responsiveFontSizes(MyTheme);

export default MyTheme as Theme & ThemeOptions;
