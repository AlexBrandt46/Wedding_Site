import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import styles from './EventInfo.module.css';
import type { EventScheduleItemProps } from '../../types/Props';

export default function EventScheduleItem({ time, event }: EventScheduleItemProps) {
	return (
		<ListItem>
			<Box className={styles.eventScheduleItem}>
				<Typography variant="body1" className={styles.eventScheduleTime}>
					{time}:&nbsp;
				</Typography>
				<Typography variant="body1">{event}</Typography>
			</Box>
		</ListItem>
	);
}
