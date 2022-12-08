const readFile = require('../utils/read_input_file_line_by_line');
const createGrid = (filename) => {
  const grid = [];
  let count = 0;
  readFile((line) => {
    line = line.trim();
    if (line) {
      grid[count] = [];
      for (let i = 0; i < line.length; i++) {
        grid[count].push(Number(line[i]));
      }
      count++;
    }
  }, filename);
  return grid;
};

module.exports = createGrid;
