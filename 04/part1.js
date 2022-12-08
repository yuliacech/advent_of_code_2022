const readFile = require('../utils/read_input_file_line_by_line');
let pairCount = 0;
const solve = (filename) => {
  readFile((line) => {
    if (line) {
      const pairs = line.split(',');
      const left = pairs[0];
      const leftParts = left.split('-');
      const leftStart = Number(leftParts[0]);
      const leftEnd = Number(leftParts[1]);
      const right = pairs[1];
      const rightParts = right.split('-');
      const rightStart = Number(rightParts[0]);
      const rightEnd = Number(rightParts[1]);

      if ((leftStart <= rightStart && leftEnd >= rightEnd) ||
          (rightStart <= leftStart && rightEnd >= leftEnd)) pairCount++;
    }
  }, filename);
  return pairCount;
};

module.exports = solve;

console.log(solve('input.txt'));
