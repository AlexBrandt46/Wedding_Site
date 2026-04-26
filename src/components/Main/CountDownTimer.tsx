import { Stack, Paper, Typography } from '@mui/material';
import { getTimeDifference } from '../../utils/dateUtil';
import { useEffect, useState } from 'react';

export default function CountDownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeDifference(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeDifference(new Date()));
    }, 1000); // In milliseconds (1000 ms = 1 sec)

    return () => clearInterval(interval);
  }, []);

  return (
    <Stack direction="row" sx={{ justifySelf: 'center', flexGrow: 1, flexBasis: 'auto' }}>
      <Paper className="countDownPaper" sx={{ marginRight: '1vw' }}>
        <Typography className="countDownNumber">{timeLeft.weeks}</Typography>
        <Typography sx={{ paddingBottom: 0 }}>Weeks</Typography>
      </Paper>
      <Paper className="countDownPaper" sx={{ marginRight: '1vw' }}>
        <Typography className="countDownNumber">{timeLeft.days}</Typography>
        <Typography sx={{ paddingBottom: 0 }}>Days</Typography>
      </Paper>
      <Paper className="countDownPaper" sx={{ marginRight: '1vw' }}>
        <Typography className="countDownNumber">{timeLeft.hours}</Typography>
        <Typography sx={{ paddingBottom: 0 }}>Hours</Typography>
      </Paper>
      <Paper className="countDownPaper" sx={{ marginRight: '1vw' }}>
        <Typography className="countDownNumber">{timeLeft.minutes}</Typography>
        <Typography sx={{ paddingBottom: 0 }}>Minutes</Typography>
      </Paper>
      <Paper className="countDownPaper">
        <Typography className="countDownNumber">{timeLeft.seconds}</Typography>
        <Typography sx={{ paddingBottom: 0 }}>Seconds</Typography>
      </Paper>
    </Stack>
  );
}
