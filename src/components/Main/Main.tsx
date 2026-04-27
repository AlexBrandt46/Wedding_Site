import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CountDownTimer from './CountDownTimer';

export default function Main() {
  return (
    <Paper className="pagePaper" sx={{ display: 'flex', flexDirection: 'column' }}>
      <CountDownTimer />
      <Box>
        <Typography variant="h6">Our Registry</Typography>
        <Typography variant="body1" align="left">
          <b>Target:</b>{' '}
        </Typography>
        <Typography variant="body1" align="left">
          <b>Amazon:</b>{' '}
        </Typography>
      </Box>
    </Paper>
  );
}
