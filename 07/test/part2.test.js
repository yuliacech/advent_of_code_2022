const {resolve} = require('path');
const solvePart2 = require('../part2');

const filename = resolve(__dirname, './input.txt');
test('solves the example input', () => {
  expect(solvePart2(filename)).toBe(24933642);
});
