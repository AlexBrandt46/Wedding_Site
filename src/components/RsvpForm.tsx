import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Tooltip, { type TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Fragment, useState } from 'react';
import { createGuest } from '../types/Guest';
import { supabase } from '../utils/supabaseUtil';

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

export default function RsvpForm() {
  const [guest, setGuest] = useState(createGuest());
  const [dietTextboxHidden, setDietTextboxHidden] = useState(true);
  const [attending, setAttending] = useState<boolean | null>(null);
  const [dietDescription, setDietDescription] = useState('');
  const [showEmailConfirmationAlert, setShowEmailConfirmationAlert] = useState(false);

  const submitRsvp = async () => {
    const { data, error } = await supabase.from('guests').insert({
      firstName: guest.firstName,
      lastName: guest.lastName,
      emailAddress: guest.emailAddress,
      attending: guest.attending,
      otherDescription: dietTextboxHidden ? '' : dietDescription,
    });

    console.log(data);

    if (!error) {
      setShowEmailConfirmationAlert(true);
    }
  };

  const handleAttendingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const attendingVal = (e.target as HTMLInputElement).value;
    setAttending(attendingVal === 'attending');
    setGuest({ ...guest, attending: attendingVal === 'attending' });
  };

  return (
    <Paper sx={{ textAlign: 'center', padding: '1rem', fontFamily: 'Butler' }}>
      <Snackbar
        open={showEmailConfirmationAlert}
        onClose={() => setShowEmailConfirmationAlert(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert>Thank you for RSVPing! Expect a confirmation email shortly.</Alert>
      </Snackbar>
      <Typography variant="h5" style={{ fontFamily: 'Butler' }}>
        Event RSVP
      </Typography>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'Butler',
        }}
      >
        <RadioGroup
          name="attending-radio-buttons-group"
          sx={{ justifyContent: 'center', flexDirection: 'row' }}
          value={attending}
          onChange={handleAttendingChange}
        >
          <FormControlLabel
            value="attending"
            control={<Radio />}
            label="Attending"
            checked={attending !== null && attending}
          />
          <FormControlLabel
            value="notAttending"
            control={<Radio />}
            label="Not Attending"
            checked={attending !== null && !attending}
          />
        </RadioGroup>
        <TextField
          className="rsvp-input"
          id="first-name-input"
          required
          label="First Name"
          onChange={(e) => setGuest({ ...guest, firstName: e.target.value })}
        />
        <TextField
          className="rsvp-input"
          id="last-name-input"
          required
          label="Last Name"
          onChange={(e) => setGuest({ ...guest, lastName: e.target.value })}
        />
        <TextField
          className="rsvp-input"
          id="email-input"
          required
          label="Email"
          type="email"
          helperText="We'll never share your email."
          onChange={(e) => setGuest({ ...guest, emailAddress: e.target.value })}
        />
        <FormControl>
          <FormGroup>
            <FormGroup>
              <FormControlLabel
                label="Dietary Restrictions"
                control={
                  <Checkbox
                    name="diet"
                    checked={!dietTextboxHidden}
                    onChange={(e) => setDietTextboxHidden(!e.target.checked)}
                  />
                }
              ></FormControlLabel>
              <TextField
                className="rsvp-input"
                id="other-diet-input"
                label="Please Specify"
                required={!dietTextboxHidden}
                disabled={dietTextboxHidden}
                sx={{ visibility: dietTextboxHidden ? 'hidden' : 'visible' }}
                value={dietDescription}
                onChange={(e) => setDietDescription(e.target.value)}
              />
            </FormGroup>
          </FormGroup>
        </FormControl>
      </form>
      <HtmlTooltip
        title={
          (attending === null ||
            guest.firstName === '' ||
            guest.lastName === '' ||
            guest.emailAddress === '' ||
            (!dietTextboxHidden && dietDescription === '')) && (
            <Fragment>
              {/* <Typography> */}
              The following information must still be provided before you can submit your RSVP:
              {/* </Typography> */}
              <ul>
                {attending === null && <li>Attendance</li>}
                {guest.firstName === '' && <li>First Name</li>}
                {guest.lastName === '' && <li>Last Name</li>}
                {guest.emailAddress === '' && <li>Email Address</li>}
                {!dietTextboxHidden && dietDescription === '' && (
                  <li>Specific dietary restrictions if you checked "Other"</li>
                )}
              </ul>
            </Fragment>
          )
        }
      >
        <span>
          <Button
            type="submit"
            variant="contained"
            sx={{ marginTop: '1vh' }}
            onClick={submitRsvp}
            disabled={
              attending === null ||
              guest.firstName === '' ||
              guest.lastName === '' ||
              guest.emailAddress === '' ||
              (!dietTextboxHidden && dietDescription === '')
            }
          >
            Submit RSVP
          </Button>
        </span>
      </HtmlTooltip>
    </Paper>
  );
}
