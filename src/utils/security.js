/**
 * Security utilities for input validation and sanitization
 */

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Username validation (alphanumeric, underscore, 3-20 chars)
const USERNAME_REGEX = /^[a-zA-Z0-9_]{3,20}$/;

// Password validation (min 8 chars, at least one uppercase, one lowercase, one number)
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

// Name validation (letters, spaces, hyphens, 2-50 chars)
const NAME_REGEX = /^[a-zA-Z\s\-]{2,50}$/;

/**
 * Sanitize input to prevent XSS and injection attacks
 * @param {string} input - Input to sanitize
 * @returns {string} - Sanitized input
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove < and > to prevent XSS
    .replace(/["']/g, '') // Remove quotes to prevent SQL injection
    .replace(/[;\\]/g, '') // Remove semicolons and backslashes
    .replace(/script|javascript|vbscript|onload|onerror/gi, '') // Remove dangerous keywords
    .slice(0, 100); // Limit length
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - Whether email is valid
 */
export const validateEmail = (email) => {
  if (!email || typeof email !== 'string') return false;
  const sanitized = sanitizeInput(email.toLowerCase());
  return EMAIL_REGEX.test(sanitized);
};

/**
 * Validate username format
 * @param {string} username - Username to validate
 * @returns {boolean} - Whether username is valid
 */
export const validateUsername = (username) => {
  if (!username || typeof username !== 'string') return false;
  const sanitized = sanitizeInput(username);
  return USERNAME_REGEX.test(sanitized);
};

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {object} - Validation result with isValid and message
 */
export const validatePassword = (password) => {
  if (!password || typeof password !== 'string') {
    return { isValid: false, message: 'Password is required' };
  }
  
  if (password.length < 8) {
    return { isValid: false, message: 'Password must be at least 8 characters' };
  }
  
  if (!/[a-z]/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one lowercase letter' };
  }
  
  if (!/[A-Z]/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one uppercase letter' };
  }
  
  if (!/\d/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one number' };
  }
  
  return { isValid: true, message: 'Password is valid' };
};

/**
 * Validate name format
 * @param {string} name - Name to validate
 * @returns {boolean} - Whether name is valid
 */
export const validateName = (name) => {
  if (!name || typeof name !== 'string') return false;
  const sanitized = sanitizeInput(name);
  return NAME_REGEX.test(sanitized);
};

/**
 * Rate limiting utility
 */
export class RateLimiter {
  constructor(maxAttempts = 5, windowMs = 60000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
    this.attempts = new Map();
  }

  isAllowed(key) {
    const now = Date.now();
    const attempts = this.attempts.get(key) || [];
    
    // Remove old attempts outside the window
    const validAttempts = attempts.filter(time => now - time < this.windowMs);
    
    if (validAttempts.length >= this.maxAttempts) {
      return false;
    }
    
    validAttempts.push(now);
    this.attempts.set(key, validAttempts);
    return true;
  }

  getRemainingAttempts(key) {
    const attempts = this.attempts.get(key) || [];
    const now = Date.now();
    const validAttempts = attempts.filter(time => now - time < this.windowMs);
    return Math.max(0, this.maxAttempts - validAttempts.length);
  }
}

/**
 * Generate secure random string
 * @param {number} length - Length of random string
 * @returns {string} - Random string
 */
export const generateSecureRandom = (length = 32) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};