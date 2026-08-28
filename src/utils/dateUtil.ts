import { type Duration } from 'duration-fns';

export const weddingDate = new Date(2026, 8, 12, 16, 30); // Set the wedding date and time (month is 0-indexed, so 8 = September)
const rsvpDeadline = new Date('2026-08-10T23:59:59'); // Set the RSVP deadline date and time

const MS_TO_SECS = 1000;
const SECS_TO_MINS = MS_TO_SECS * 60;
const MINS_TO_HRS = SECS_TO_MINS * 60;
const HRS_TO_DAYS = MINS_TO_HRS * 24;
const DAYS_TO_WKS = HRS_TO_DAYS * 7;

export function getTimeDifference(date: Date, weddingDate: Date): Duration {
	if (date >= weddingDate) {
		return {
			years: 0,
			months: 0,
			weeks: 0,
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
			milliseconds: 0,
		};
	}

	let remainingMs = weddingDate.getTime() - date.getTime();
	const weeks = Math.floor(remainingMs / DAYS_TO_WKS);
	remainingMs %= DAYS_TO_WKS;
	const days = Math.floor(remainingMs / HRS_TO_DAYS);
	remainingMs %= HRS_TO_DAYS;
	const hours = Math.floor(remainingMs / MINS_TO_HRS);
	remainingMs %= MINS_TO_HRS;
	const minutes = Math.floor(remainingMs / SECS_TO_MINS);
	const seconds = Math.ceil((remainingMs % SECS_TO_MINS) / MS_TO_SECS) % 60;

	return {
		years: -1,
		months: -1,
		weeks,
		days: days,
		hours: hours,
		minutes: minutes,
		seconds,
		milliseconds: -1,
	};
}

export function isDatePastRsvpDeadline(date: Date): boolean {
	return date > rsvpDeadline;
}
