import { describe, it, expect } from 'vitest';
import { isValidEmail, isNotEmptyString, isValidName } from '../utils/rsvpValidationUtil';

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

  describe('isNotEmptyString', () => {
    describe('valid non-empty strings', () => {
      it('should accept a simple string', () => {
        expect(isNotEmptyString('hello')).toBe(true);
      });

      it('should accept a single character', () => {
        expect(isNotEmptyString('a')).toBe(true);
      });

      it('should accept a string with spaces', () => {
        expect(isNotEmptyString('hello world')).toBe(true);
      });

      it('should accept a string with leading space and content', () => {
        expect(isNotEmptyString(' hello')).toBe(true);
      });

      it('should accept a string with trailing space and content', () => {
        expect(isNotEmptyString('hello ')).toBe(true);
      });

      it('should accept a string with numbers', () => {
        expect(isNotEmptyString('123')).toBe(true);
      });

      it('should accept a string with special characters', () => {
        expect(isNotEmptyString('hello@world!')).toBe(true);
      });
    });

    describe('invalid empty strings', () => {
      it('should reject an empty string', () => {
        expect(isNotEmptyString('')).toBe(false);
      });

      it('should reject a string with only spaces', () => {
        expect(isNotEmptyString('   ')).toBe(false);
      });

      it('should reject a string with only tabs', () => {
        expect(isNotEmptyString('\t\t')).toBe(false);
      });

      it('should reject a string with only newlines', () => {
        expect(isNotEmptyString('\n\n')).toBe(false);
      });

      it('should reject a string with mixed whitespace', () => {
        expect(isNotEmptyString(' \t\n ')).toBe(false);
      });
    });
  });

  describe('isValidName', () => {
    describe('valid names', () => {
      it('should accept a simple first name', () => {
        expect(isValidName('John')).toBe(true);
      });

      it('should accept a simple last name', () => {
        expect(isValidName('Smith')).toBe(true);
      });

      it('should accept a name with all lowercase letters', () => {
        expect(isValidName('alice')).toBe(true);
      });

      it('should accept a name with all uppercase letters', () => {
        expect(isValidName('BOB')).toBe(true);
      });

      it('should accept a full name with space', () => {
        expect(isValidName('John Doe')).toBe(true);
      });

      it('should accept a name with apostrophe', () => {
        expect(isValidName("O'Brien")).toBe(true);
      });

      it('should accept a name with hyphen', () => {
        expect(isValidName('Mary-Jane')).toBe(true);
      });

      it('should accept a name with multiple words separated by spaces', () => {
        expect(isValidName('Mary Anne Smith')).toBe(true);
      });

      it('should accept a name with multiple apostrophes', () => {
        expect(isValidName("O'Neal O'Brien")).toBe(true);
      });

      it('should accept a name with multiple hyphens', () => {
        expect(isValidName('Jean-Claude-Marie')).toBe(true);
      });

      it('should accept a name with mixed special characters', () => {
        expect(isValidName("Mary-Anne O'Connor")).toBe(true);
      });

      it('should accept a single character name', () => {
        expect(isValidName('X')).toBe(true);
      });

      it('should accept a name with leading apostrophe', () => {
        expect(isValidName("'Brien")).toBe(true);
      });

      it('should accept a name with leading hyphen', () => {
        expect(isValidName('-Smith')).toBe(true);
      });
    });

    describe('invalid names', () => {
      it('should reject an empty string', () => {
        expect(isValidName('')).toBe(false);
      });

      it('should reject a string with only spaces', () => {
        expect(isValidName('   ')).toBe(false);
      });

      it('should reject a name with numbers', () => {
        expect(isValidName('John123')).toBe(false);
      });

      it('should reject a name with single number', () => {
        expect(isValidName('5')).toBe(false);
      });

      it('should reject a name with period', () => {
        expect(isValidName('John.')).toBe(false);
      });

      it('should reject a name with comma', () => {
        expect(isValidName('Smith, John')).toBe(false);
      });

      it('should reject a name with @ symbol', () => {
        expect(isValidName('John@Doe')).toBe(false);
      });

      it('should reject a name with exclamation mark', () => {
        expect(isValidName('John!')).toBe(false);
      });

      it('should reject a name with parentheses', () => {
        expect(isValidName('John (Johnny)')).toBe(false);
      });

      it('should reject a name with brackets', () => {
        expect(isValidName('John [Jr]')).toBe(false);
      });

      it('should reject a name with backslash', () => {
        expect(isValidName('John\\Doe')).toBe(false);
      });

      it('should reject a name with forward slash', () => {
        expect(isValidName('John/Doe')).toBe(false);
      });

      it('should reject a name with colon', () => {
        expect(isValidName('John: Doe')).toBe(false);
      });

      it('should reject a name with semicolon', () => {
        expect(isValidName('John; Doe')).toBe(false);
      });

      it('should reject a name with question mark', () => {
        expect(isValidName('John?')).toBe(false);
      });

      it('should reject a name with asterisk', () => {
        expect(isValidName('John*Doe')).toBe(false);
      });
    });

    describe('edge cases', () => {
      it('should reject a name with only apostrophe', () => {
        expect(isValidName("'")).toBe(true);
      });

      it('should reject a name with only hyphen', () => {
        expect(isValidName('-')).toBe(true);
      });

      it('should reject a name with consecutive apostrophes', () => {
        expect(isValidName("O''Brien")).toBe(true);
      });

      it('should reject a name with consecutive hyphens', () => {
        expect(isValidName('Mary--Jane')).toBe(true);
      });

      it('should accept very long valid name', () => {
        expect(isValidName('Alexander-Christopher-Wilhelm-Frederick')).toBe(true);
      });

      it('should accept name with leading and trailing spaces after trim', () => {
        expect(isValidName('  John  ')).toBe(true);
      });
    });
  });
});
