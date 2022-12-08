const createGrid = require('./create_grid');
const {resolve} = require('path');

const getScore = (grid, i, j) => {
  const scoreFromRight = getScoreFromRight(grid, i, j);
  const scoreFromLeft = getScoreFromLeft(grid, i, j);
  const scoreFromTop = getScoreFromTop(grid, i, j);
  const scoreFromBottom = getScoreFromBottom(grid, i, j);
  return scoreFromRight * scoreFromLeft *
      scoreFromTop * scoreFromBottom;
};

const getScoreFromRight = (grid, i, j) => {
  let score = 0;
  const tree = grid[i][j];
  for (let k = j + 1; k < grid[i].length; k++) {
    const anotherTree = grid[i][k];
    score++;
    if (tree <= anotherTree) {
      break;
    }
  }
  return score;
};
const getScoreFromLeft = (grid, i, j) => {
  let score = 0;
  const tree = grid[i][j];
  for (let k = j - 1; k >= 0; k--) {
    const anotherTree = grid[i][k];
    score++;
    if (tree <= anotherTree) {
      break;
    }
  }
  return score;
};
const getScoreFromTop = (grid, i, j) => {
  let score = 0;
  const tree = grid[i][j];
  for (let k = i - 1; k >= 0; k--) {
    const anotherTree = grid[k][j];
    score++;
    if (tree <= anotherTree) {
      break;
    }
  }
  return score;
};
const getScoreFromBottom = (grid, i, j) => {
  let score = 0;
  const tree = grid[i][j];
  for (let k = i + 1; k < grid.length; k++) {
    const anotherTree = grid[k][j];
    score++;
    if (tree <= anotherTree) {
      break;
    }
  }
  return score;
};

const solvePart2 = (filename) => {
  const grid = createGrid(filename);
  let maxScore = 0;
  for (let i = 1; i < grid.length - 1; i++) {
    const row = grid[i];
    for (let j = 1; j < row.length - 1; j++) {
      const score = getScore(grid, i, j);
      if (score > maxScore) {
        maxScore = score;
      }
    }
  }
  return maxScore;
};
module.exports = solvePart2;
const filename = resolve(__dirname, './input.txt');
console.log(solvePart2(filename));
