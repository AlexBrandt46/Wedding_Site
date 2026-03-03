import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { supabase } from '../utils/supabaseUtil';

export default function RsvpForm() {
  const [dietOtherDisabled, setDietOtherDisabled] = useState(true);
  const [attending, setAttending] = useState<boolean | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [dietState, setDietState] = useState({
    gluten: false,
    nut: false,
    dairy: false,
    vegetarian: false,
    vegan: false,
    other: false,
    otherDescription: '',
  });

  const { gluten, nut, dairy, vegetarian, vegan, other, otherDescription } = dietState;

  const submitRsvp = async () => {
    const { data, error } = await supabase.from('guests').insert({
      firstName,
      lastName,
      address,
      attending,
      emailAddress
    });

    console.log(data);
    console.log(error);
  };

  const handleAttendingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const attendingVal = (e.target as HTMLInputElement).value;
    console.log(attendingVal);
    setAttending(attendingVal === 'attending');
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDietState({
      ...dietState,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <Paper sx={{ textAlign: 'center', padding: '1rem', fontFamily: 'Butler' }}>
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
          <FormControlLabel value="attending" control={<Radio />} label="Attending" checked={attending !== null && attending} />
          <FormControlLabel value="notAttending" control={<Radio />} label="Not Attending" checked={attending !== null && !attending} />
        </RadioGroup>
        <TextField
          className="rsvp-input"
          id="first-name-input"
          required
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          className="rsvp-input"
          id="last-name-input"
          required
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          className="rsvp-input"
          id="email-input"
          required
          label="Email"
          type="email"
          helperText="We'll never share your email."
          value={emailAddress}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className="rsvp-input"
          id="address-input"
          required
          label="Address"
          helperText="We'll never share your address."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
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
                    checked={other}
                    onChange={(e) => {
                      handleCheckboxChange(e);
                      setDietOtherDisabled(!dietOtherDisabled);
                    }}
                  />
                }
              ></FormControlLabel>
              <TextField
                className="rsvp-input"
                id="other-diet-input"
                label="Please Specify"
                disabled={dietOtherDisabled}
                value={otherDescription}
              />
            </FormGroup>
          </FormGroup>
        </FormControl>
      </form>
      <Button type="submit" variant="contained" sx={{ marginTop: '1vh' }} onClick={submitRsvp}>
        Submit RSVP
      </Button>
    </Paper>
  );
}
