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
    <Stack direction="row" sx={{ justifySelf: 'center' }}>
      <Paper sx={{ padding: '5px 15px', marginRight: '1vw' }}>
        <Paper>
          <Typography>{timeLeft.weeks}</Typography>
        </Paper>
        <Typography sx={{ paddingBottom: 0 }}>Weeks</Typography>
      </Paper>
      <Paper sx={{ padding: '5px 15px', marginRight: '1vw' }}>
        <Paper>
          <Typography>{timeLeft.days}</Typography>
        </Paper>
        <Typography sx={{ paddingBottom: 0 }}>Days</Typography>
      </Paper>
      <Paper sx={{ padding: '5px 15px', marginRight: '1vw' }}>
        <Paper>
          <Typography>{timeLeft.hours}</Typography>
        </Paper>
        <Typography sx={{ paddingBottom: 0 }}>Hours</Typography>
      </Paper>
      <Paper sx={{ padding: '5px 15px', marginRight: '1vw' }}>
        <Paper>
          <Typography>{timeLeft.minutes}</Typography>
        </Paper>
        <Typography sx={{ paddingBottom: 0 }}>Minutes</Typography>
      </Paper>
      <Paper sx={{ padding: '5px 15px', marginRight: '1vw' }}>
        <Paper>
          <Typography>{timeLeft.seconds}</Typography>
        </Paper>
        <Typography sx={{ paddingBottom: 0 }}>Seconds</Typography>
      </Paper>
    </Stack>
  );
}
