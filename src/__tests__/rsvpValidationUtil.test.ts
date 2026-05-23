import { describe, it, expect } from 'vitest';
import { isValidEmail } from '../utils/rsvpValidationUtil';

describe('rsvpValidationUtil', () => {
  describe('isValidEmail', () => {
    describe('valid email addresses', () => {
      it('should accept a simple email address', () => {
        expect(isValidEmail('user@example.com')).toBe(true);
      });

      it('should accept email with multiple characters in local part', () => {
        expect(isValidEmail('john.doe@example.com')).toBe(true);
      });

      it('should accept email with numbers in local part', () => {
        expect(isValidEmail('user123@example.com')).toBe(true);
      });

      it('should accept email with hyphen in domain', () => {
        expect(isValidEmail('user@my-domain.com')).toBe(true);
      });

      it('should accept email with single character local part', () => {
        expect(isValidEmail('a@example.com')).toBe(true);
      });

      it('should accept email with single character domain', () => {
        expect(isValidEmail('user@a.co')).toBe(true);
      });

      it('should accept email with multiple subdomains', () => {
        expect(isValidEmail('user@mail.example.co.uk')).toBe(true);
      });

      it('should accept email with special characters in local part (before @ symbol)', () => {
        expect(isValidEmail('user+tag@example.com')).toBe(true);
      });

      it('should accept email with underscore in local part', () => {
        expect(isValidEmail('user_name@example.com')).toBe(true);
      });

      it('should accept email with hyphen in local part', () => {
        expect(isValidEmail('user-name@example.com')).toBe(true);
      });
    });

    describe('invalid email addresses', () => {
      it('should reject email with missing @ symbol', () => {
        expect(isValidEmail('userexample.com')).toBe(false);
      });

      it('should reject email with missing local part', () => {
        expect(isValidEmail('@example.com')).toBe(false);
      });

      it('should reject email with missing domain', () => {
        expect(isValidEmail('user@.com')).toBe(false);
      });

      it('should reject email with missing TLD', () => {
        expect(isValidEmail('user@example')).toBe(false);
      });

      it('should reject email with space in local part', () => {
        expect(isValidEmail('user name@example.com')).toBe(false);
      });

      it('should reject email with space in domain', () => {
        expect(isValidEmail('user@exam ple.com')).toBe(false);
      });

      it('should reject email with leading space', () => {
        expect(isValidEmail(' user@example.com')).toBe(false);
      });

      it('should reject email with trailing space', () => {
        expect(isValidEmail('user@example.com ')).toBe(false);
      });

      it('should reject email with multiple @ symbols', () => {
        expect(isValidEmail('user@@example.com')).toBe(false);
      });

      it('should reject email with @ in local part', () => {
        expect(isValidEmail('user@name@example.com')).toBe(false);
      });

      it('should reject empty string', () => {
        expect(isValidEmail('')).toBe(false);
      });

      it('should reject email with only @ symbol', () => {
        expect(isValidEmail('@')).toBe(false);
      });

      it('should reject email with consecutive dots in domain', () => {
        expect(isValidEmail('user@example..com')).toBe(false);
      });

      it('should reject email ending with dot', () => {
        expect(isValidEmail('user@example.com.')).toBe(false);
      });

      it('should reject email ending with @', () => {
        expect(isValidEmail('user@example.com@')).toBe(false);
      });

      it('should reject email with @ in domain', () => {
        expect(isValidEmail('user@example@.com')).toBe(false);
      });

      it('should reject email with space in extension', () => {
        expect(isValidEmail('user@example.c om')).toBe(false);
      });
    });

    describe('edge cases', () => {
      it('should reject email with only whitespace', () => {
        expect(isValidEmail('   ')).toBe(false);
      });

      it('should reject email with tab character', () => {
        expect(isValidEmail('user\t@example.com')).toBe(false);
      });

      it('should reject email with newline character', () => {
        expect(isValidEmail('user\n@example.com')).toBe(false);
      });

      it('should accept very long but valid email', () => {
        expect(isValidEmail('verylonglocalpart@verylongdomainname.verylongextension.com')).toBe(
          true
        );
      });
    });
  });
});
