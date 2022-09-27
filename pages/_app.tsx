import { createContext, useMemo } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from "react-redux";
import store from "../models";

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
};

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

function MyApp({ Component, pageProps }: AppProps) {
  const state = store.getState();
  const { dispatch } = store;

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        const currentMode = state.colorMode.mode;
        dispatch.colorMode.update(currentMode === "light" ? "dark" : "light");
      },
    }),
    [state.colorMode.mode, dispatch],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: state.colorMode.mode,
          ...(state.colorMode.mode === "dark"
            ? {
              primary: primaryDark,
              secondary: secondaryDark,
            }
            : {
              primary: primaryLight,
              secondary: secondaryLight,
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
                  color: "#4ca771",
                }
              },
              {
                props: { variant: "contained" },
                style: {
                  color: "#101f10"
                }
              }
            ]
          }
        }
      }),
    [state.colorMode.mode],
  );

  return (
    <Provider store={store}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Provider>
  )
}

export default MyApp
