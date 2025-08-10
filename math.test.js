const { factorial, fibonacci } = require('./math');

test('factorial de 5 es 120', () => {
  expect(factorial(5)).toBe(120);
});

test('fibonacci de 6 es 8', () => {
  expect(fibonacci(6)).toBe(8);
});