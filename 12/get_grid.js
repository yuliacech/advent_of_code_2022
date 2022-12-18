const readFile = require('../utils/read_input_file_line_by_line');
const heightString = 'abcdefghijklmnopqrstuvwxyz';
const getGrid = (filename, getAllStartingPositions) => {
  const grid = [];
  const starts = [];
  let end;
  let rowCounter = 0;
  readFile((line)=> {
    if (line) {
      const row = line.trim().split('').map((char, index) => {
        if (char === 'S') {
          starts.push(`${rowCounter},${index}`);
          return heightString.indexOf('a');
        }
        if (char === 'E') {
          end = `${rowCounter},${index}`;
          return heightString.indexOf('z');
        }
        if (char === 'a' && getAllStartingPositions) {
          starts.push(`${rowCounter},${index}`);
        }
        return heightString.indexOf(char);
      });
      rowCounter ++;
      grid.push(row);
    }
  }, filename);
  return {grid, starts, end};
};

module.exports = getGrid;
