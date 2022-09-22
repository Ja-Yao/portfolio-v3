import { useMemo } from 'react';
import { useMediaQuery } from '@mui/material';
import { createTheme } from '@mui/material/styles';


const theme = useMemo(
  () => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    return createTheme({
      palette: {
        mode: prefersDarkMode ? 'dark' : 'light',
        ...(!prefersDarkMode
          ? {
            primary: {
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
            },
            secondary: {
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
            },
          }
          : {
            primary: {
              main: '#c0e6ba',
              contrastText: "#fbfbfd",
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
            },
            secondary: {
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
            },
          }),
      },
      typography: {
        fontFamily: "Nunito, PT Sans, Helveitca Neue, sans-serif"
      },
    })
  },
  [],
);

export default theme;
