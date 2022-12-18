const getGrid = require('./get_grid');
const {resolve} = require('path');
const bfs = require('./bfs');


const solve = (filename) => {
  const {grid, starts, end} = getGrid(filename, true);

  const counts = starts.map((start)=> bfs({grid, start, end}));
  let min = counts[0];
  counts.map((count) => {
    if (count < min) {
      min = count;
    }
  });
  return min;
};

module.exports = solve;

const filename = resolve(__dirname, './input.txt');
console.log(solve(filename));
