import Paper from '@mui/material/Paper';
import CountDownTimer from './CountDownTimer';
import styles from './Main.module.css';

import proposalBanner from '../../assets/images/proposal_banner.jpg';

const mainStyle = { display: 'flex', flexDirection: 'column' };

export default function Main() {
	return (
		<Paper className={styles.pagePaper} sx={mainStyle}>
			<CountDownTimer />
			<div style={{ display: 'block' }}>
				<img className={styles.usImage} style={{ marginTop: '1rem', borderRadius: '4px' }} src={proposalBanner} />
			</div>
		</Paper>
	);
}
