import {
  createCountdownDate,
  type CountdownDate,
} from "../types/CountdownDate";

const weddingDate = new Date(2026, 8, 12, 2, 0);

function getTimeDifference(): number {
  const today = Date.now();
  const timeDiff = weddingDate.getTime() - today;

  return timeDiff;
}

// export function monthsUntil(timeNum: number): number {
//   let months = 0;
//   let currentDate = Date.now();

//   return targetMonth - currentMonth;
// }

export function daysUntil(timeNum: number): number {
  return Math.ceil(timeNum / (1000 * 60 * 60 * 24)); // Number of days
}

// export function weeksUntil(date: Date): number {
//   const timeDiff = getTimeDifference(date);
//   return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
// }

// export function daysUntil(date: Date): number {
//   const timeDiff = getTimeDifference(date);
//   return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
// }

// export function hoursUntil(date: Date): number {
//   const timeDiff = getTimeDifference(date);
//   return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
// }

// export function minutesUntil(date: Date): number {
//   const timeDiff = getTimeDifference(date);
//   return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
// }

// export function secondsUntil(date: Date): number {
//   const timeDiff = getTimeDifference(date);
//   return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
// }

export function getTimeLeft(): CountdownDate {
  let countdownDate = createCountdownDate();
  let timeDiff = getTimeDifference();

  // const months = monthsUntil(timeDiff);
  
  // console.log(months);

  return countdownDate;
}
