const getGrid = require('./get_grid');
const moveSand = (grid, position, maxY) => {
  const [x, y] = position;
  if (!grid[x]) {
    grid[x] = {};
  }
  if ((y + 1) === (maxY + 2)) {
    grid[x][y] = 'o';
    return x === 500 && y === 0;
  }
  const isDownBlocked =
      grid[x][y + 1] === '#' || grid[x][y + 1] === 'o';
  if (!isDownBlocked) {
    return moveSand(grid, [x, y + 1], maxY);
  }
  if (!grid[x - 1]) {
    grid[x - 1] = {};
  }
  const isDownLeftBlocked =
      grid[x - 1][y + 1] === '#' || grid[x - 1][y + 1] === 'o';
  if (!isDownLeftBlocked) {
    return moveSand(grid, [x - 1, y + 1], maxY);
  }
  if (!grid[x + 1]) {
    grid[x + 1] = {};
  }
  const isDownRightBlocked =
      grid[x + 1][y + 1] === '#' || grid[x + 1][y + 1] === 'o';
  if (!isDownRightBlocked) {
    return moveSand(grid, [x + 1, y + 1], maxY);
  }
  grid[x][y] = 'o';
  return x === 500 && y === 0;
};
const processSand = (grid, maxY) => {
  let count = 0;
  let isStartBlocked = false;
  while (!isStartBlocked) {
    const startPosition = [500, 0];
    isStartBlocked = moveSand(grid, startPosition, maxY);
    if (!isStartBlocked) {
      count++;
    }
  }
  return count + 1;
};

const part2 = (input) => {
  const [grid, maxY] = getGrid(input);
  return processSand(grid, maxY);
};

module.exports = part2;
