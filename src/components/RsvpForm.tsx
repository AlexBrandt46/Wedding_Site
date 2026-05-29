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
import RsvpAlert from './EventInfo/RsvpAlert';
import { isPastRsvpDeadline } from '../utils/dateUtil';
import { isNotEmptyString, isValidEmail, isValidName } from '../utils/rsvpValidationUtil';

// TODO: Fix issue with

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
  const [address, setAddress] = useState('');
  const [showEmailConfirmationAlert, setShowEmailConfirmationAlert] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [dietDescriptionError, setDietDescriptionError] = useState('');
  const [addressError, setAddressError] = useState('');

  const pastRsvpDeadline: boolean = isPastRsvpDeadline();

  const submitRsvp = async () => {
    const trimmedFirstName = guest.firstName.trim();
    const trimmedLastName = guest.lastName.trim();
    const trimmedEmail = guest.emailAddress.trim();
    const trimmedDietDescription = dietDescription.trim();
    let validInput = true;

    if (!isValidEmail(trimmedEmail)) {
      setEmailError('Please enter a valid email address.');
      validInput = false;
    } else {
      setEmailError('');
    }

    if (!isValidName(trimmedFirstName)) {
      setFirstNameError('Please enter a non-empty first name.');
      validInput = false;
    } else {
      setFirstNameError('');
    }

    if (!isValidName(trimmedLastName)) {
      setLastNameError('Please enter a non-empty last name.');
      validInput = false;
    } else {
      setLastNameError('');
    }

    if (!isNotEmptyString(guest.address)) {
      setAddressError('Please enter a non-empty address.');
      validInput = false;
    } else {
      setAddressError('');
    }

    if (!dietTextboxHidden && !isNotEmptyString(trimmedDietDescription)) {
      setDietDescriptionError(
        'Please enter a non-empty dietary restriction if the "Dietary Restrictions" option is selected.'
      );
      validInput = false;
    } else {
      setDietDescriptionError('');
    }

    if (!validInput) {
      return;
    }

    const { data, error } = await supabase.from('guests').insert({
      firstName: trimmedFirstName,
      lastName: trimmedLastName,
      emailAddress: trimmedEmail,
      attending: guest.attending,
      otherDescription: dietTextboxHidden ? '' : trimmedDietDescription,
      address: guest.address,
    });

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
      <Typography variant="h5" sx={{ marginBottom: '1rem' }}>
        Event RSVP
      </Typography>
      <RsvpAlert />
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
          helperText={firstNameError}
          error={!!firstNameError}
          onChange={(e) => {
            setGuest({ ...guest, firstName: e.target.value });
            setFirstNameError('');
          }}
        />
        <TextField
          className="rsvp-input"
          id="last-name-input"
          required
          label="Last Name"
          helperText={lastNameError}
          error={!!lastNameError}
          onChange={(e) => {
            setGuest({ ...guest, lastName: e.target.value });
            setLastNameError('');
          }}
        />
        <TextField
          className="rsvp-input"
          id="email-input"
          required
          label="Email"
          type="email"
          helperText={emailError || "We'll never share your email."}
          error={!!emailError}
          onChange={(e) => {
            setGuest({ ...guest, emailAddress: e.target.value });
            setEmailError('');
          }}
        />
        <TextField
          className="rsvp-input"
          id="address-input"
          required
          label="Address"
          type="address"
          helperText={addressError || "We'll never share your address."}
          error={!!addressError}
          onChange={(e) => {
            setGuest({ ...guest, address: e.target.value });
            setAddressError('');
          }}
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
                helperText={dietDescriptionError}
                error={!!dietDescriptionError}
                onChange={(e) => {
                  setDietDescription(e.target.value);
                  setDietDescriptionError('');
                }}
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
            guest.address === '' ||
            emailError !== '' ||
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
                {guest.address === '' && <li>Address</li>}
                {firstNameError !== '' && <li>{firstNameError}</li>}
                {lastNameError !== '' && <li>{lastNameError}</li>}
                {emailError !== '' && <li>{emailError}</li>}
                {emailError !== '' && <li>{emailError}</li>}
                {!dietTextboxHidden && dietDescription === '' && (
                  <li>Specific dietary restrictions if you checked "Other".</li>
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
              pastRsvpDeadline ||
              attending === null ||
              guest.firstName === '' ||
              guest.lastName === '' ||
              guest.emailAddress === '' ||
              guest.address === '' ||
              emailError !== '' ||
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
