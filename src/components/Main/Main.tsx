import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CountDownTimer from './CountDownTimer';

import proposalBanner from '../../assets/images/proposal_banner.jpg';

export default function Main() {
  return (
    <Paper className="pagePaper" sx={{ display: 'flex', flexDirection: 'column' }}>
      <CountDownTimer />
      <div style={{ display: 'block' }}>
        <img id="usImage" style={{ marginTop: '1rem', borderRadius: '4px' }} src={proposalBanner} />
      </div>
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
