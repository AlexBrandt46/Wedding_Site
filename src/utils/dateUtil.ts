import { between, normalize, type Duration } from 'duration-fns';

const weddingDate = new Date(2026, 8, 12, 14);

export function getTimeDifference(): Duration {
  const today = new Date();
  const diff = normalize(between(weddingDate, today));
  const SEPT_DAYS = 30;
  const dayDiff = SEPT_DAYS - diff.days;

  const dayPast =
    (diff.days === 0 && diff.hours === 0 && diff.minutes === 0 && diff.minutes > 0) ||
    (diff.days === 0 && diff.hours === 0 && diff.minutes > 0) ||
    (diff.days === 0 && diff.hours > 0) ||
    diff.days > 0;

  return {
    years: 0,
    months: 12 + diff.months + (dayPast ? -1 : 0), // Month difference is relative to calendar and not actual date for some dumb reason
    weeks: Math.floor(dayDiff / 7),
    days: dayDiff % 7,
    hours: 23 - diff.hours,
    minutes: 59 - diff.minutes,
    seconds: 59 - diff.seconds,
    milliseconds: 0,
  };
}
