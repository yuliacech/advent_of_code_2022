const {resolve} = require('path');
const solve = require('../part2');

const filename = resolve(__dirname, './input.txt');
test('solves the example input', () => {
  expect(solve(filename)).toBe(140);
});
