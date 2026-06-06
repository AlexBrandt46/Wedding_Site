import { describe, it, expect } from 'vitest';
import { createGuest } from '../types/Guest';

describe('Guest', () => {
  describe('createGuest', () => {
    it('should return a Guest object with all properties', () => {
      const guest = createGuest();
      expect(guest).toHaveProperty('uid');
      expect(guest).toHaveProperty('firstName');
      expect(guest).toHaveProperty('lastName');
      expect(guest).toHaveProperty('emailAddress');
      expect(guest).toHaveProperty('attending');
      expect(guest).toHaveProperty('address');
    });

    it('should generate a unique uid for each guest', () => {
      const guest1 = createGuest();
      const guest2 = createGuest();
      expect(guest1.uid).not.toBe(guest2.uid);
    });

    it('should initialize uid as a non-empty string', () => {
      const guest = createGuest();
      expect(typeof guest.uid).toBe('string');
      expect(guest.uid.length).toBeGreaterThan(0);
    });

    it('should initialize uid as a valid UUID format', () => {
      const guest = createGuest();
      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
      expect(guest.uid).toMatch(uuidRegex);
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

    it('should initialize address as empty string', () => {
      const guest = createGuest();
      expect(guest.address).toBe('');
    });

    it('should not initialize dietRestrictions', () => {
      const guest = createGuest();
      expect(guest.dietRestrictions).toBeUndefined();
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
      guest.dietRestrictions = 'vegetarian';
      expect(guest.firstName).toBe('John');
      expect(guest.lastName).toBe('Doe');
      expect(guest.attending).toBe(true);
      expect(guest.dietRestrictions).toBe('vegetarian');
    });
  });
});
