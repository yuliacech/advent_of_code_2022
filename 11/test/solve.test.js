const {resolve} = require('path');
const solve = require('../solve');

const filename = resolve(__dirname, './input.txt');
test('solves the example input', () => {
  expect(solve(filename, 20, true)).toBe(10605n);
  expect(solve(filename, 10000, false)).toBe(2713310158n);
});
