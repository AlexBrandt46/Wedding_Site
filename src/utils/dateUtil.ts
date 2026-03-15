import { between, type Duration } from "duration-fns";

const weddingDate = new Date(2026, 8, 27, 14);

export function getTimeDifference(): Duration {
  const today = new Date();
  console.log(today);
  const diff = between(weddingDate, today);

  console.log(diff)

  // JS Dates use 0-based index of months, days, hours, minutes, and seconds

  return {
    years: 0,
    months: 11 + diff.months, // Month difference is negative for some dumb reason
    weeks: diff.weeks,
    days: diff.days,
    hours: 23 - diff.hours,
    minutes: 59 - diff.minutes,
    seconds: 59 - diff.seconds,
    milliseconds: 0
  }
}
