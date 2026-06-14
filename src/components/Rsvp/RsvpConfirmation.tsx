import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { RsvpConfirmationProps } from '../../types/Props';
import PageHeader from '../PageHeader';

export default function RsvpConfirmation({ onBackToForm, onBackToHome }: RsvpConfirmationProps) {
	return (
		<Paper sx={{ textAlign: 'center', padding: '2rem' }}>
			<PageHeader title="Event RSVP" />
			<Typography variant="body1" sx={{ marginBottom: '2rem', lineHeight: 1.6 }}>
				Expect a confirmation email shortly. If there are others in your party you wish to RSVP for, please submit
				another RSVP for them.
			</Typography>
			<Stack direction="row" spacing={2} sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
				<Button variant="contained" color="primary" onClick={onBackToForm}>
					Submit Another RSVP
				</Button>
				<Button variant="outlined" color="primary" onClick={onBackToHome}>
					Return Home
				</Button>
			</Stack>
		</Paper>
	);
}
