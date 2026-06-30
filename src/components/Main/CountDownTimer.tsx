import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { getTimeDifference, weddingDate } from '../../utils/dateUtil';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import styles from './CountDownTimer.module.css';

const TIME_UNITS = ['weeks', 'days', 'hours', 'minutes', 'seconds'] as const;

const timeLabelStyle = { paddingBottom: 0 };
const untilLabelStyle = { marginTop: '1rem' };

export default function CountDownTimer() {
	const [timeLeft, setTimeLeft] = useState(getTimeDifference(new Date(), weddingDate));

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeLeft(getTimeDifference(new Date(), weddingDate));
		}, 1000); // In milliseconds (1000 ms = 1 sec)

		return () => clearInterval(interval);
	}, []);

	return (
		<Box>
			<Stack direction="row" className={styles.countDownStack}>
				{TIME_UNITS.map((unit, index) => (
					<Paper
						key={unit}
						className={styles.countDownPaper}
						sx={{ marginRight: index === TIME_UNITS.length - 1 ? 0 : '1vw' }}
					>
						<Typography className={styles.countDownNumber}>{timeLeft[unit]}</Typography>
						<Typography sx={timeLabelStyle}>
							{unit.charAt(0).toUpperCase() + unit.slice(1, -1) + (timeLeft[unit] === 1 ? ' ' : 's')}
						</Typography>
					</Paper>
				))}
			</Stack>
			<Typography variant="h6" align="center" sx={untilLabelStyle}>
				Until "I Do"
			</Typography>
		</Box>
	);
}
