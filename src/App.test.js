const { normalizeInput, validateInput } = require('./app');

describe('normalizeInput', () => {
  it('should return an empty string if the value is falsy', () => {
    expect(normalizeInput('', '')).toBe('');
  });

  it('should format the input value correctly', () => {
    expect(normalizeInput('1234567890', '')).toBe('(123) 456-7890');
    expect(normalizeInput('123456', '(123) 456')).toBe('(123) 456');
    expect(normalizeInput('12345678901', '(123) 456-7890')).toBe('(123) 456-7890');
  });
});

describe('validateInput', () => {
  it('should return an error message if the value is falsy', () => {
    expect(validateInput('')).toBe('Phone number is required!');
  });

  it('should return an error message if the value is not in the correct format', () => {
    expect(validateInput('(123) 456')).toBe('Invalid phone number format. Example: (555) 555-5555');
    expect(validateInput('(123) 456-78901')).toBe('Invalid phone number format. Example: (555) 555-5555');
  });

  it('should return an empty string if the value is in the correct format', () => {
    expect(validateInput('(123) 456-7890')).toBe('');
  });
});
