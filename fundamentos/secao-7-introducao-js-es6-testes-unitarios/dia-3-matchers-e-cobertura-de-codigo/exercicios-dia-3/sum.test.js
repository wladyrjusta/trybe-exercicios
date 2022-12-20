const sum = require('./sum');

describe('Tests the function sum', () => {
  it('sum is a function', () => {
  expect(typeof sum).toBe('function');
  });
  it('sum(4, 5) returns 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('sum(0, 0) returns 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('sum(number, string) returns Error', () => {
    expect(() => sum(4, '5')).toThrow(new Error('parameters must be numbers'));
  });
});