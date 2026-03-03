import { Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getTimeLeft } from "../utils/dateUtil";

export default function Main() {
  
  const timeLeft = getTimeLeft();

  useEffect(() => {

  })

  return (
    <Paper sx={{ padding: "1rem" }}>
      <Stack direction="row" sx={{ justifySelf: 'center' }}>
        <Paper sx={{ padding: "10px 15px", marginRight: "1vw" }}>
          <Paper>
            <Typography>{timeLeft.months}</Typography>
          </Paper>
          <Typography sx={{ paddingBottom: 0 }}>Months</Typography>
        </Paper>
        <Paper sx={{ padding: "5px 15px", marginRight: "1vw" }}>
          <Paper>
            <Typography>{timeLeft.weeks}</Typography>
          </Paper>
          <Typography sx={{ paddingBottom: 0 }}>Weeks</Typography>
        </Paper>
        <Paper sx={{ padding: "5px 15px", marginRight: "1vw" }}>
          <Paper>
            <Typography>{timeLeft.days}</Typography>
          </Paper>
          <Typography sx={{ paddingBottom: 0 }}>Days</Typography>
        </Paper>
        <Paper sx={{ padding: "5px 15px", marginRight: "1vw" }}>
          <Paper>
            <Typography>{timeLeft.hours}</Typography>
          </Paper>
          <Typography sx={{ paddingBottom: 0 }}>Hours</Typography>
        </Paper>
        <Paper sx={{ padding: "5px 15px", marginRight: "1vw" }}>
          <Paper>
            <Typography>{timeLeft.minutes}</Typography>
          </Paper>
          <Typography sx={{ paddingBottom: 0 }}>Minutes</Typography>
        </Paper>
        <Paper sx={{ padding: "5px 15px", marginRight: "1vw" }}>
          <Paper>
            <Typography>{timeLeft.seconds}</Typography>
          </Paper>
          <Typography sx={{ paddingBottom: 0 }}>Seconds</Typography>
        </Paper>
      </Stack>
    </Paper>
  );
}

// const getTimeLeft = (): TimeLeft => {
//   let unitsLeft: Number[] = [];

//   return {};
// };
