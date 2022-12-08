const createGrid = require('./create_grid');
const {resolve} = require('path');
const getIsVisible = (grid, i, j) => {
  const isVisibleFromRight = getIsVisibleFromRight(grid, i, j);
  const isVisibleFromLeft = getIsVisibleFromLeft(grid, i, j);
  const isVisibleFromTop = getIsVisibleFromTop(grid, i, j);
  const isVisibleFromBottom = getIsVisibleFromBottom(grid, i, j);
  return isVisibleFromRight || isVisibleFromLeft ||
      isVisibleFromTop || isVisibleFromBottom;
};
const getIsVisibleFromRight = (grid, i, j) => {
  let isVisible = true;
  const tree = grid[i][j];
  for (let k = i + 1; k < grid.length; k++) {
    const anotherTree = grid[k][j];
    if (tree <= anotherTree) {
      isVisible = false;
    }
  }
  return isVisible;
};
const getIsVisibleFromLeft = (grid, i, j) => {
  let isVisible = true;
  const tree = grid[i][j];
  for (let k = 0; k < i; k++) {
    const anotherTree = grid[k][j];
    if (tree <= anotherTree) {
      isVisible = false;
    }
  }
  return isVisible;
};
const getIsVisibleFromTop = (grid, i, j) => {
  let isVisible = true;
  const tree = grid[i][j];
  for (let k = 0; k < j; k++) {
    const anotherTree = grid[i][k];
    if (tree <= anotherTree) {
      isVisible = false;
    }
  }
  return isVisible;
};
const getIsVisibleFromBottom = (grid, i, j) => {
  let isVisible = true;
  const tree = grid[i][j];
  for (let k = j + 1; k < grid[j].length; k++) {
    const anotherTree = grid[i][k];
    if (tree <= anotherTree) {
      isVisible = false;
    }
  }
  return isVisible;
};
const solvePart1 = (filename) => {
  const grid = createGrid(filename);
  const visibleTrees = new Set();
  for (let i = 1; i < grid.length - 1; i++) {
    const row = grid[i];
    for (let j = 1; j < row.length - 1; j++) {
      const isVisible = getIsVisible(grid, i, j);
      if (isVisible) {
        visibleTrees.add(`${i}-${j}`);
      }
    }
  }
  return visibleTrees.size + (grid.length * 2) + ((grid[0].length - 2) * 2);
};
module.exports = solvePart1;
const filename = resolve(__dirname, './input.txt');
console.log(solvePart1(filename));
