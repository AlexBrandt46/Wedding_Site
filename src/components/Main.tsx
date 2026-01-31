import { Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function Main() {
  interface TimeLeft {
    months: number;
    weeks: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }

  const [timeLeft, _setTimeLeft] = useState({
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  } as TimeLeft);

  return (
    <Paper sx={{ padding: "1rem" }}>
      <Stack direction="row">
        <Paper>
          <Paper>
            <Typography>{timeLeft.months}</Typography>
          </Paper>
          <Typography>Months</Typography>
        </Paper>
      </Stack>
    </Paper>
  );
}

// const getTimeLeft = (): TimeLeft => {
//   let unitsLeft: Number[] = [];

//   return {};
// };
