import { createTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import './App.css';
import MobileTabList from './components/Menu/MobileMenuDrawer';
import WideTabList from './components/Menu/WideTabList';

function App() {
  const minHeaderMatch = useMediaQuery('(min-width:516px)');

  const theme = createTheme({
    typography: {
      fontFamily: 'Butler',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Butler';
            font-style: bold;
            font-display: swap;
            font-weight: 400;
            src: local("Butler-Bold"), url("./assets/fonts/serif/Butler-Bold.woff2") format();
          },

        `,
      },
      MuiAlert: {
        styleOverrides: {
          root: {
            variants: [
              {
                props: { severity: 'error' },
                style: {
                  color: 'var(--red)',
                  backgroundColor: 'var(--salmon)',
                },
              },
              {
                props: { severity: 'warning' },
                style: {
                  color: 'var(--yellow)',
                  backgroundColor: 'var(--gold)',
                },
              },
            ],
          },
          // standardError: {
          //   color: var(--salmon);
          // },
          // standardWarning: {
          //   color: var(--yellow);
          //   background-color: var(--gold);
          // },
        },
      },
    },
  });

  const [value, setValue] = React.useState('1');

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          top: 0,
          justifyContent: 'center',
          fontFamily: 'Butler !important',
        }}
      >
        {minHeaderMatch && <WideTabList value={value} setValue={setValue} />}
        {!minHeaderMatch && <MobileTabList value={value} setValue={setValue} />}
      </Box>
    </ThemeProvider>
  );
}

export default App;
