import { describe, it, expect } from 'vitest';
import { createGuest } from '../types/Guest';

describe('Guest', () => {
  describe('createGuest', () => {
    it('should return a Guest object with all properties', () => {
      const guest = createGuest();
      expect(guest).toHaveProperty('firstName');
      expect(guest).toHaveProperty('lastName');
      expect(guest).toHaveProperty('emailAddress');
      expect(guest).toHaveProperty('attending');
      expect(guest).toHaveProperty('otherDescription');
      expect(guest).toHaveProperty('address');
    });

    it('should initialize firstName as empty string', () => {
      const guest = createGuest();
      expect(guest.firstName).toBe('');
    });

    it('should initialize lastName as empty string', () => {
      const guest = createGuest();
      expect(guest.lastName).toBe('');
    });

    it('should initialize emailAddress as empty string', () => {
      const guest = createGuest();
      expect(guest.emailAddress).toBe('');
    });

    it('should initialize attending as false', () => {
      const guest = createGuest();
      expect(guest.attending).toBe(false);
    });

    it('should initialize otherDescription as empty string', () => {
      const guest = createGuest();
      expect(guest.otherDescription).toBe('');
    });

    it('should initialize address as empty string', () => {
      const guest = createGuest();
      expect(guest.address).toBe('');
    });

    it('should return a new instance each call', () => {
      const guest1 = createGuest();
      const guest2 = createGuest();
      expect(guest1).not.toBe(guest2);
    });

    it('should allow mutation of returned object', () => {
      const guest = createGuest();
      guest.firstName = 'John';
      guest.lastName = 'Doe';
      guest.attending = true;
      expect(guest.firstName).toBe('John');
      expect(guest.lastName).toBe('Doe');
      expect(guest.attending).toBe(true);
    });
  });
});
