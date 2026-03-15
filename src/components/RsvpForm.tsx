import {
  Alert,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { supabase } from '../utils/supabaseUtil';
import { createGuest, getFormattedDietary, type DietaryRestrictions } from '../types/Guest';

export default function RsvpForm() {
  const [guest, setGuest] = useState(createGuest());
  const [dietOtherDisabled, setDietOtherDisabled] = useState(true);
  const [attending, setAttending] = useState<boolean | null>(null);
  const [dietState, setDietState] = useState(guest.dietaryRestrictions);
  const [otherDescription, setOtherDescription] = useState('');
  const [showEmailConfirmationAlert, setShowEmailConfirmationAlert] = useState(false);

  const { gluten, nut, dairy, vegetarian, vegan } = dietState;

  const submitRsvp = async () => {
    const formattedDietary = getFormattedDietary(dietState);

    const { data, error } = await supabase.from('guests').insert({
      firstName: guest.firstName,
      lastName: guest.lastName,
      emailAddress: guest.emailAddress,
      attending: guest.attending,
      dietaryRestrictions: formattedDietary,
      otherDescription: dietOtherDisabled ? '' : otherDescription,
    });

    console.log(data);
    console.log(error);

    if (!error) {
      setShowEmailConfirmationAlert(true);
    }
  };

  const handleAttendingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const attendingVal = (e.target as HTMLInputElement).value;
    setAttending(attendingVal === 'attending');
    setGuest({ ...guest, attending: attendingVal === 'attending' });
  };

  /**
   * Event handler for changing dietary restrictions checkboxes
   * @param e
   */
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dietState[e.target.name as keyof DietaryRestrictions] = e.target.checked;

    if (e.target.name === 'other') {
      setDietOtherDisabled(!dietOtherDisabled);
    }

    setDietState({
      ...dietState,
    });
  };

  const closeEmailConfirmationAlert = () => {
    setShowEmailConfirmationAlert(false);
  }

  return (
    <Paper sx={{ textAlign: 'center', padding: '1rem', fontFamily: 'Butler' }}>
      <Snackbar open={showEmailConfirmationAlert} onClose={closeEmailConfirmationAlert}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert>
          Thank you for RSVPing! Expect a confirmation email shortly.
        </Alert>
      </Snackbar>
      <Typography variant="h5" fontFamily={'Butler'}>
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
          <FormLabel>Dietary Restrictions</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="Gluten Free"
              control={<Checkbox name="gluten" checked={gluten} onChange={handleCheckboxChange} />}
            ></FormControlLabel>
            <FormControlLabel
              label="Nut Free"
              control={<Checkbox name="nut" checked={nut} onChange={handleCheckboxChange} />}
            ></FormControlLabel>
            <FormControlLabel
              label="Dairy Free"
              control={<Checkbox name="dairy" checked={dairy} onChange={handleCheckboxChange} />}
            ></FormControlLabel>
            <FormControlLabel
              label="Vegetarian"
              control={
                <Checkbox name="vegetarian" checked={vegetarian} onChange={handleCheckboxChange} />
              }
            ></FormControlLabel>
            <FormControlLabel
              label="Vegan"
              control={<Checkbox name="vegan" checked={vegan} onChange={handleCheckboxChange} />}
            ></FormControlLabel>
            <FormGroup sx={{ flexDirection: 'row' }}>
              <FormControlLabel
                label="Other"
                control={
                  <Checkbox
                    name="other"
                    checked={!dietOtherDisabled}
                    onChange={() => setDietOtherDisabled(!dietOtherDisabled)}
                  />
                }
              ></FormControlLabel>
              <TextField
                className="rsvp-input"
                id="other-diet-input"
                label="Please Specify"
                disabled={dietOtherDisabled}
                value={otherDescription}
                onChange={(e) => setOtherDescription(e.target.value)}
              />
            </FormGroup>
          </FormGroup>
        </FormControl>
      </form>
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
          (!dietOtherDisabled && otherDescription === '')
        }
      >
        Submit RSVP
      </Button>
    </Paper>
  );
}
