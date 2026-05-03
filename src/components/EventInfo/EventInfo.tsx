import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import RsvpAlert from './RsvpAlert';

export default function EventInfo() {
  return (
    <Paper
      sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', padding: '1rem' }}
      className="pagePaper"
    >
      <Typography variant="h5" sx={{ marginBottom: '1rem' }}>
        Event Info
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          marginBottom: '1rem',
        }}
      >
        <Typography variant="h6" noWrap>
          RSVP Deadline
        </Typography>
        <RsvpAlert />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Typography variant="h6">Where</Typography>
        <Typography variant="body1" gutterBottom>
          113 S Division St, Spring Lake, MI 49456
        </Typography>
      </Box>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.357936109817!2d-86.2034736228249!3d43.07596968957139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88198152002a1cb3%3A0x9fc82a6170eb75d2!2sThe%20Lilley%20Mansion%20Bed%20and%20Breakfast!5e0!3m2!1sen!2sus!4v1768167177460!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0, borderRadius: '4px' }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Grand Haven Map"
      ></iframe>
      <br />
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Typography variant="h6">When</Typography>
        <Typography variant="body1">September 12th, TBD - Early Afternoon Start-Time</Typography>
      </Box>
      <br />
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Typography variant="h6">Dress Code</Typography>
        <Typography variant="body1">Garden Party/Bridgerton (be fun/colorful/creative)</Typography>
      </Box>
      <br />
      <b>Schedule of Events:</b>
      <List>
        <ListItem>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Typography variant="body1">1 PM:</Typography>
            <Typography variant="body1">Pre-Ceremony Greeting Time</Typography>
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1">2 PM:</Typography>
            <Typography variant="body1">Ceremony</Typography>
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1">3 PM:</Typography>
            <Typography variant="body1">Cocktail Hour</Typography>
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1">4 PM:</Typography>
            <Typography variant="body1">Reception</Typography>
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1">9 PM:</Typography>
            <Typography variant="body1">End of Reception</Typography>
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1">9:30 PM:</Typography>
            <Typography variant="body1">Bar-Hopping in Spring Lake and Grand Haven</Typography>
          </Box>
        </ListItem>
      </List>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Typography variant="h6">Overnight Accommodations</Typography>
        <Typography variant="body1">
          For those wishing to stay nearby, there are several hotels and numerous AirBnbs, bed and
          breakfasts, and VRBOs within a short distance of the venue.
        </Typography>
      </Box>
      <br />
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Typography variant="h6">Age Limit</Typography>
        <Typography variant="body1">
          The event is strictly <b>18+</b> by request of the venue to keep the day stress-free and
          fun for everyone.
        </Typography>
      </Box>
    </Paper>
  );
}
