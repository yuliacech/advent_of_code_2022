const {resolve} = require('path');
const solveDay3Part2 = require('../part2');

const filename = resolve(__dirname, 'input.txt');
test('solves the example input', () => {
  expect(solveDay3Part2(filename)).toBe(70);
});
