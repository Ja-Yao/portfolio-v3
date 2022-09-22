import { useMemo } from 'react';
import { useMediaQuery } from '@mui/material';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface PaletteColor {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;

  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;

  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  outline: string;
}

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    light: string;
    main: string;
    dark: string;
    contrastText: string;

    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;

    background: string;
    onBackground: string;
    surface: string;
    onSurface: string;
    surfaceVariant: string;
    onSurfaceVariant: string;
    outline: string;
  }
}

const primaryLight: PaletteColor = {
  main: '#c0e6ba',
  contrastText: "#1b1c1a",
  onPrimary: '#fbfbfd',
  primaryContainer: '#c0e6ba',
  onPrimaryContainer: '#002105',

  background: '#fbfbfd',
  onBackground: '#1b1c1a',
  surface: '#fbfbfd',
  onSurface: '#1b1c1a',
  surfaceVariant: '#e1e3dc',
  onSurfaceVariant: '#454843',
  outline: '#757872',
};

const secondaryLight: PaletteColor = {
  main: '#52634f',
  onPrimary: '#fbfbfd',
  primaryContainer: '#d5e8cf',
  onPrimaryContainer: '#101f10',

  background: '#fbfbfd',
  onBackground: '#1b1c1a',
  surface: '#fbfbfd',
  onSurface: '#1b1c1a',
  surfaceVariant: '#e1e3dc',
  onSurfaceVariant: '#454843',
  outline: '#757872',
};

const primaryDark: PaletteColor = {
  main: '#c0e6ba',
  contrastText: "#101f10",
  onPrimary: '#fbfbfd',
  primaryContainer: '#c0e6ba',
  onPrimaryContainer: '#002105',

  background: '#1b1c1a',
  onBackground: '#fbfbfd',
  surface: '#1b1c1a',
  onSurface: '#fbfbfd',
  surfaceVariant: '#e1e3dc',
  onSurfaceVariant: '#454843',
  outline: '#757872',
};

const secondaryDark: PaletteColor = {
  main: '#52634f',
  onPrimary: '#fbfbfd',
  primaryContainer: '#d5e8cf',
  onPrimaryContainer: '#101f10',

  background: '#fbfbfd',
  onBackground: '#1b1c1a',
  surface: '#fbfbfd',
  onSurface: '#1b1c1a',
  surfaceVariant: '#e1e3dc',
  onSurfaceVariant: '#454843',
  outline: '#757872',
};

function MyApp({ Component, pageProps }: AppProps) {
  const prefersDarkMode: boolean = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          ...(!prefersDarkMode
            ? {
              primary: primaryLight,
              secondary: secondaryLight,
            }
            : {
              primary: primaryDark,
              secondary: secondaryDark,
            }),
        },
        typography: {
          fontFamily: "Nunito, PT Sans, Helveitca Neue, sans-serif",
          button: {
            textTransform: "none"
          }
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
