import Paper from '@mui/material/Paper';
import CountDownTimer from './CountDownTimer';

import proposalBanner from '../../assets/images/proposal_banner.jpg';

export default function Main() {
  return (
    <Paper className="pagePaper" sx={{ display: 'flex', flexDirection: 'column' }}>
      <CountDownTimer />
      <div style={{ display: 'block' }}>
        <img id="usImage" style={{ marginTop: '1rem', borderRadius: '4px' }} src={proposalBanner} />
      </div>
    </Paper>
  );
}
