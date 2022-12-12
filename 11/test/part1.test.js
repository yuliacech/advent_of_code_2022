const {resolve} = require('path');
const solvePart1 = require('../part1');

const filename = resolve(__dirname, './input.txt');
test('solves the example input', () => {
  expect(solvePart1(filename, 20, true)).toBe(10605n);
  expect(solvePart1(filename, 10000, false)).toBe(2713310158n);
});
