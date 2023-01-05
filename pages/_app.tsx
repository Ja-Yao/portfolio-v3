import { createContext, useMemo, useState } from 'react';
import { PaletteMode } from '@mui/material';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material/styles';


interface PaletteColor {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;

  onPrimary?: string;
  primaryContainer?: string;
  onPrimaryContainer?: string;

  background?: string;
  onBackground?: string;
  surface?: string;
  onSurface?: string;
  surfaceVariant?: string;
  onSurfaceVariant?: string;
  outline?: string;

  // tonal colors
  surfaceAt1?: string,
  surfaceAt2?: string,
  surfaceAt3?: string,
  surfaceAt4?: string,
  surfaceAt5?: string
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

    surfaceAt1: string;
    surfaceAt2: string;
    surfaceAt3: string;
    surfaceAt4: string;
    surfaceAt5: string;
  }
}

const primaryLight: PaletteColor = {
  main: '#386a20',
  contrastText: "#1b1c1a",
  onPrimary: 'white',
  primaryContainer: '#b8f397',
  onPrimaryContainer: '#072100',

  background: '#fdfdf6',
  onBackground: '#1a1c18',
  surface: '#fdfdf6',
  onSurface: '#1b1c1a',
  surfaceVariant: '#e0e4d7',
  onSurfaceVariant: '#43483e',
  outline: '#74796d',

  surfaceAt1: "#f3f5eb",
  surfaceAt2: "#ebefe2",
  surfaceAt3: "#e7edde",
  surfaceAt4: "#e5ebdc",
  surfaceAt5: "#e1e8d7"
};

const secondaryLight: PaletteColor = {
  main: '#55624c',
  onPrimary: 'white',
  primaryContainer: '#d8e7cb',
  onPrimaryContainer: '#131f0d',
};

const errorLight: PaletteColor = {
  main: "#ba1a1a",
  onPrimary: "white",
  primaryContainer: "#ffdad6",
  onPrimaryContainer: "#410002"
}

const primaryDark: PaletteColor = {
  main: '#9cd67e',
  contrastText: "#fbfbfd",
  onPrimary: '#113800',
  primaryContainer: '#205107',
  onPrimaryContainer: '#b8f397',

  background: '#1a1c18',
  onBackground: '#e3e3dc',
  surface: '#1a1c18',
  onSurface: '#e3e3dc',
  surfaceVariant: '#43483e',
  onSurfaceVariant: '#c3c8bb',
  outline: '#8d9287',

  surfaceAt1: "#21261d",
  surfaceAt2: "#272e23",
  surfaceAt3: "#283123",
  surfaceAt4: "#2a3324",
  surfaceAt5: "#2c3627"
};

const secondaryDark: PaletteColor = {
  main: '#52634f',
  onPrimary: '#fbfbfd',
  primaryContainer: '#d5e8cf',
  onPrimaryContainer: '#101f10',
};

const errorDark: PaletteColor = {
  main: "#ffb4ab",
  onPrimary: "#690005",
  primaryContainer: "#93000a",
  onPrimaryContainer: "#ffdad6"
}

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<PaletteMode>("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => prevMode === "light" ? "dark" : "light");
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          ...(mode === "dark"
            ? {
              primary: primaryDark,
              secondary: secondaryDark,
              error: errorDark
            }
            : {
              primary: primaryLight,
              secondary: secondaryLight,
              error: errorLight
            }),
        },
        typography: {
          fontFamily: "Nunito, PT Sans, Helveitca Neue, sans-serif",
          button: {
            textTransform: "none"
          }
        },
        components: {
          MuiButton: {
            variants: [
              {
                props: { variant: "text" },
                style: {
                  borderRadius: "20px",
                  color: mode === "dark" ? "white" : "#1a1c18",
                }
              },
              {
                props: { variant: "contained" },
                style: {
                  borderRadius: "20px",
                  backgroundColor: mode === "dark" ? "#9cd67e" : "#386a20",
                  color: mode === "dark" ? "#113800" : "white"
                }
              }
            ]
          },
          MuiDrawer: {
            styleOverrides: {
              paper: {
                backgroundColor: mode === "dark" ? "#252b20" : "#edf1e6",
              }
            }
          },
          MuiListItemButton: {
            styleOverrides: {
              selected: {
                color: mode === "dark" ? "#101f10" : "131f0d",
                backgroundColor: mode === "dark" ? "#d5e8cf" : "#d8e7cb",
              },
            }
          }
        }
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default MyApp
