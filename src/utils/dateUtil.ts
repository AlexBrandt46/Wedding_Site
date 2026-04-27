import { type Duration } from 'duration-fns';

const weddingDate = new Date(2026, 8, 12, 14);

const MS_TO_SECS = 1000;
const SECS_TO_MINS = MS_TO_SECS * 60;
const MINS_TO_HRS = SECS_TO_MINS * 60;
const HRS_TO_DAYS = MINS_TO_HRS * 24;
const DAYS_TO_WKS = HRS_TO_DAYS * 7;

// export function oldGetTimeDifference(): Duration {
//   const today = new Date();

//   const otherDate = new Date(2026, 3, 12, 14); // April 11th, 2026 2PM

//   const newTime = newGetTimeDifference(today);

//   return {
//     years: 0,
//     months: 0, // Month difference is relative to calendar and not actual date for some dumb reason
//     weeks: newTime.weeks,
//     days: newTime.days,
//     hours: newTime.hours,
//     minutes: newTime.minutes,
//     seconds: newTime.seconds,
//     milliseconds: 0,
//   };
// }

// TODO: Create unit tests for this function to verify that it is calculating the correct time difference
export function getTimeDifference(date: Date): Duration {
  // Calculate difference in milliseconds
  const diffInMs = weddingDate.getTime() - date.getTime();

  // Convert to days (1000ms * 60s * 60m * 24h)
  const actualDaysUntil = diffInMs / HRS_TO_DAYS; // There is a remainder with this
  const wholeDaysUntil = Math.floor(actualDaysUntil);
  const actualWeeksUntil = Math.floor(diffInMs / DAYS_TO_WKS);

  const actualHoursUntil = diffInMs / MINS_TO_HRS;
  const wholeHoursUntil = Math.floor(actualHoursUntil);

  const actualMinutesUntil = diffInMs / SECS_TO_MINS;
  const wholeMinutesUntil = Math.floor(actualMinutesUntil);
  const minutes = wholeMinutesUntil % 60;

  const secUntil = diffInMs / MS_TO_SECS;
  const wholeSecUntil = Math.ceil(secUntil);
  let secs = wholeSecUntil % 60;

  if (secs === 60) {
    secs = 0;
  }

  const days = wholeDaysUntil % 7;
  const hours = wholeHoursUntil % 24;

  return {
    years: -1,
    months: -1,
    weeks: actualWeeksUntil,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: secs,
    milliseconds: -1,
  };
}
