const {resolve} = require('path');
const solvePart2 = require('../part2');

test('solves the example input A', () => {
  const filename = resolve(__dirname, './inputA.txt');
  expect(solvePart2(filename)).toBe(1);
});
test('solves the example input B', () => {
  const filename = resolve(__dirname, './inputB.txt');
  expect(solvePart2(filename)).toBe(36);
});
