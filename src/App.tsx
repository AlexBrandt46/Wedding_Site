import { createTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import MobileTabList from './components/Menu/MobileMenuDrawer';
import WideTabList from './components/Menu/WideTabList';

function App() {
	const minHeaderMatch = useMediaQuery('(min-width:516px)');

	const theme = createTheme({
		typography: {
			fontFamily: 'Baskerville',
		},
		components: {
			MuiCssBaseline: {
				styleOverrides: `
          @font-face {
            font-family: 'Baskerville';
            font-style: normal;
            font-display: swap;
            font-weight: 700;
            src:
              local('Baskerville'),
              url('./assets/fonts/Baskerville\ Regular.woff2') format('woff2');
          }
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
								props: { severity: 'info' },
								style: {
									backgroundColor: 'var(--gold)',
								},
							},
						],
					},
				},
			},
		},
	});

	const [tab, setTab] = React.useState('1');
	const [uid, setUid] = React.useState('');

	React.useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const tabParam = params.get('tab');
		const uidParam = params.get('uid');

		if (tabParam) {
			setTab(tabParam);
		}

		if (uidParam) {
			setUid(uidParam);
		}
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Box
				sx={{
					top: 0,
					justifyContent: 'center',
				}}
			>
				{minHeaderMatch && <WideTabList tab={tab} uid={uid} setTab={setTab} />}
				{!minHeaderMatch && <MobileTabList tab={tab} uid={uid} setTab={setTab} />}
			</Box>
		</ThemeProvider>
	);
}

export default App;
