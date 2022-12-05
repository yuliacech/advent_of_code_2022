const {resolve} = require("path");
const solveDay3 = require('../part1');

const filename = resolve(__dirname, 'input.txt');
test('solves the example input', () => {
    expect(solveDay3(filename)).toBe(157);
});
