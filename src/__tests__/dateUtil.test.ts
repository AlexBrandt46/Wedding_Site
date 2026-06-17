import { describe, it, expect } from 'vitest';
import { getTimeDifference, isDatePastRsvpDeadline, weddingDate } from '../utils/dateUtil';

const rsvpDeadline = new Date('2026-08-10T23:59:59');

describe('getTimeDifference', () => {
	it('returns all 0s for when the exact moment is at the same time as at the time of the wedding ceremony', () => {
		const testDate = new Date(2026, 8, 12, 16, 30);
		expect(getTimeDifference(testDate, weddingDate)).toStrictEqual({
			years: 0,
			months: 0,
			weeks: 0,
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
			milliseconds: 0,
		});
	});

	it('returns all 0s if the tested date is past the time of the wedding ceremony', () => {
		const testDate = new Date(2026, 10, 12, 5, 22);
		expect(getTimeDifference(testDate, weddingDate)).toStrictEqual({
			years: 0,
			months: 0,
			weeks: 0,
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
			milliseconds: 0,
		});
	});
});

describe('isDatePastRsvpDeadline', () => {
	it('returns false for dates before the deadline', () => {
		const dateBeforeDeadline = new Date('2026-08-10T23:59:58');
		expect(isDatePastRsvpDeadline(dateBeforeDeadline)).toBe(false);
	});

	it('returns false for dates well before the deadline', () => {
		const dateBeforeDeadline = new Date('2026-08-01T12:00:00');
		expect(isDatePastRsvpDeadline(dateBeforeDeadline)).toBe(false);
	});

	it('returns false for the exact deadline moment', () => {
		expect(isDatePastRsvpDeadline(rsvpDeadline)).toBe(false);
	});

	it('returns true for dates after the deadline', () => {
		const dateAfterDeadline = new Date('2026-08-11T00:00:00');
		expect(isDatePastRsvpDeadline(dateAfterDeadline)).toBe(true);
	});

	it('returns true for dates well after the deadline', () => {
		const dateAfterDeadline = new Date('2026-08-15T10:00:00');
		expect(isDatePastRsvpDeadline(dateAfterDeadline)).toBe(true);
	});

	it('returns true for the day of the wedding', () => {
		const weddingDay = new Date('2026-09-12T16:30:00');
		expect(isDatePastRsvpDeadline(weddingDay)).toBe(true);
	});

	it('returns false for dates in the far past', () => {
		const farPast = new Date('2020-01-01T00:00:00');
		expect(isDatePastRsvpDeadline(farPast)).toBe(false);
	});

	it('returns true for dates one millisecond after the deadline', () => {
		const oneMillisecondAfter = new Date(rsvpDeadline.getTime() + 1);
		expect(isDatePastRsvpDeadline(oneMillisecondAfter)).toBe(true);
	});
});
