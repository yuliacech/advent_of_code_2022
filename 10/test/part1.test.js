const {resolve} = require('path');
const solvePart1 = require('../part1');

const filename = resolve(__dirname, './input.txt');
test('solves the example input', () => {
  expect(solvePart1(filename)).toBe(13140);
});
