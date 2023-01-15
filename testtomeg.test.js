const bmi = require('./testtomeg');

test('bmi 73kg end 164cm to equal 27.14', () => {
  expect(bmi(73, 164)).toBe(27.14);
});

test('bmi 54kg end 164cm to equal 20.07', () => {
    expect(bmi(54, 164)).toBe(20.08);
  });

test('bmi 48kg end 164cm to equal 17.85', () => {
expect(bmi(48, 164)).toBe(17.85);
});