import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface RsvpConfirmationProps {
  onBackToForm: () => void;
  onBackToHome: () => void;
}

export default function RsvpConfirmation({ onBackToForm, onBackToHome }: RsvpConfirmationProps) {
  return (
    <Paper sx={{ textAlign: 'center', padding: '2rem', fontFamily: 'Butler' }}>
      <Typography variant="h5" sx={{ marginBottom: '1rem' }}>
        Thank You for RSVPing!
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '2rem', lineHeight: 1.6 }}>
        An email confirmation will be sent shortly. If there are others in your party you wish to
        RSVP for, please submit another RSVP for them.
      </Typography>
      <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button variant="contained" color="primary" onClick={onBackToForm}>
          Submit Another RSVP
        </Button>
        <Button variant="outlined" color="primary" onClick={onBackToHome}>
          Back to Home
        </Button>
      </Stack>
    </Paper>
  );
}
