const {resolve} = require('path');
const solveDay3Part1 = require('../part1');

const filename = resolve(__dirname, './input.txt');
test('solves the example input', () => {
  expect(solveDay3Part1(filename)).toBe(157);
});
