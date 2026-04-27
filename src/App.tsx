import './App.css';
import { Box, createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import WideTabList from './components/WideTabList';
import MobileTabList from './components/Menu/MobileMenuDrawer';
import React from 'react';

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
          }
        `,
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
        {minHeaderMatch && <WideTabList />}
        {!minHeaderMatch && <MobileTabList value={value} setValue={setValue} />}
      </Box>
    </ThemeProvider>
  );
}

export default App;
