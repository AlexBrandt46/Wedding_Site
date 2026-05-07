import Alert from '@mui/material/Alert';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import { isPastRsvpDeadline } from '../../utils/dateUtil';

export default function RsvpAlert() {
  const isPastDeadline = isPastRsvpDeadline();
  let alertMessage = 'Please RSVP by August 10th, 2026.';
  let alertSeverity: 'info' | 'error' = 'info';
  let alertColor: 'warning' | 'error' = 'warning';

  const alertSymbol = !isPastDeadline ? (
    <InfoOutlined htmlColor="var(--dark-gold)" />
  ) : (
    <WarningAmberOutlinedIcon htmlColor="var(--dark-salmon)" />
  );

  if (isPastDeadline) {
    alertMessage =
      'The RSVP deadline has passed. Please contact us directly if you would like to attend.';
    alertSeverity = 'error';
    alertColor = 'error';
  }

  return (
    <Alert
      id="rsvpAlert"
      icon={alertSymbol}
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
