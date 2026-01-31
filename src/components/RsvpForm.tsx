import { Button, Paper, TextField, Typography } from "@mui/material";

export default function RsvpForm() {
  return (
    <Paper sx={{ textAlign: "center", padding: "1rem", fontFamily: "Butler" }}>
      <Typography variant="h5" fontFamily={"Butler"}>
        Event RSVP
      </Typography>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "Butler",
        }}
      >
        <TextField
          className="rsvp-input"
          id="first-name-input"
          required
          label="First Name"
        />
        <TextField
          className="rsvp-input"
          id="last-name-input"
          required
          label="Last Name"
        />
        <TextField
          className="rsvp-input"
          id="email-input"
          required
          label="Email"
          type="email"
          helperText="We'll never share your email."
        />
      </form>
      <Button type="submit">Submit RSVP</Button>
    </Paper>
  );
}
