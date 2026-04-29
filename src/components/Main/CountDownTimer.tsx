import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { getTimeDifference } from '../../utils/dateUtil';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

const TIME_UNITS = ['weeks', 'days', 'hours', 'minutes', 'seconds'] as const;

export default function CountDownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeDifference(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeDifference(new Date()));
    }, 1000); // In milliseconds (1000 ms = 1 sec)

    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      <Stack direction="row" id="countDownStack">
        {TIME_UNITS.map((unit, index) => (
          <Paper
            key={unit}
            className="countDownPaper"
            sx={{ marginRight: index === TIME_UNITS.length - 1 ? 0 : '1vw' }}
          >
            <Typography className="countDownNumber">{timeLeft[unit]}</Typography>
            <Typography sx={{ paddingBottom: 0 }}>
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </Typography>
          </Paper>
        ))}
      </Stack>
      <Typography variant="h6" align="center" sx={{ marginTop: '1rem' }}>
        Until "I Do"
      </Typography>
    </Box>
  );
}
