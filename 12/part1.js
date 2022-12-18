const getGrid = require('./get_grid');
const {resolve} = require('path');
const bfs = require('./bfs');


const solve = (filename) => {
  const {grid, starts, end} = getGrid(filename);
  return bfs({grid, start: starts[0], end});
};

module.exports = solve;

const filename = resolve(__dirname, './input.txt');
console.log(solve(filename));
