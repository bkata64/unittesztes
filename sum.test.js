const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 5 + 0 to equal 5', () => {
    expect(sum(5, 0)).toBe(5);
  });