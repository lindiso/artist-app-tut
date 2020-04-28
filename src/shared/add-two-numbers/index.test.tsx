import addTwoNumbers from './index';

describe('adds two numbers together', () => {
  it('should add two integers together', () => {
    const result = addTwoNumbers(2, 5);
    const expected = 7;
    expect(result).toEqual(expected);
  });
  // Add more tests here
});
