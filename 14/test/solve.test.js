const input = require('./input');
const part1 = require('../part1');
const part2 = require('../part2');

test('solves part1', () => {
  expect(part1(input)).toBe(24);
});

test('solves part1', () => {
  expect(part2(input)).toBe(93);
});
