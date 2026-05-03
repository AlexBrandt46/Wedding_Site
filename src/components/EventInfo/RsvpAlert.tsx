import { Alert } from '@mui/material';

export default function RsvpAlert() {
  const currentDate = new Date();
  const rsvpDeadline = new Date('2026-08-10T23:59:59'); // Set the RSVP deadline date and time
  const isPastDeadline = currentDate > rsvpDeadline;
  let alertMessage = 'Please RSVP by August 10th, 2026.';
  let alertSeverity: 'info' | 'error' = 'info';
  let alertColor: 'warning' | 'error' = 'warning';

  if (isPastDeadline) {
    alertMessage =
      'The RSVP deadline has passed. Please contact us directly if you would like to attend.';
    alertSeverity = 'error';
    alertColor = 'error';
  }

  return (
    <Alert
      id="rsvpAlert"
      severity={alertSeverity}
      color={alertColor}
      sx={{
        textAlign: 'center',
        marginTop: '1rem',
        fontSize: '1rem',
        width: `fit-content`,
        justifySelf: 'center',
      }}
    >
      {alertMessage}
    </Alert>
  );
}
