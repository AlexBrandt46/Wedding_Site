import { Box, Paper, Typography } from '@mui/material';
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
