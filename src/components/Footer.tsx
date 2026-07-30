import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from '../App.module.css';

const GITHUB_REPO_URL = 'https://github.com/AlexBrandt46/Wedding_Site';

export default function Footer() {
	return (
		<Box component="footer" className={styles.footer}>
			<IconButton
				component="a"
				href={GITHUB_REPO_URL}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Open project repo on GitHub"
				size="large"
			>
				<GitHubIcon />
			</IconButton>

			<Typography variant="body2" className={styles.footerVersion}>
				v{import.meta.env.VITE_APP_VERSION ?? ''}
			</Typography>
		</Box>
	);
}
