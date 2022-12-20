const getGrid = require('./get_grid');
const moveSand = (grid, position, maxY) => {
  const [x, y] = position;
  if (y > maxY) {
    return true;
  }
  if (!grid[x]) {
    grid[x] = {};
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
  return false;
};
const processSand = (grid, maxY) => {
  let count = 0;
  let isFallen = false;
  while (!isFallen) {
    const startPosition = [500, 0];
    isFallen = moveSand(grid, startPosition, maxY);
    if (!isFallen) {
      count++;
    }
  }
  return count;
};

const part1 = (input) => {
  const [grid, maxY] = getGrid(input);
  return processSand(grid, maxY);
};

module.exports = part1;
