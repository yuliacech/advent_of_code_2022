const {resolve} = require('path');
const readFile = require('../utils/read_input_file_line_by_line');
const updateTail = require('./updateTail');
const processMove = ({headPosition, tailPosition, direction, moves}) => {
  const visited = new Set();
  if (direction === 'R') {
    for (let i = 0; i < moves; i++) {
      headPosition[1]++;
      tailPosition = updateTail(headPosition, tailPosition);
      visited.add(`${tailPosition[0]}-${tailPosition[1]}`);
    }
  }
  if (direction === 'L') {
    for (let i = 0; i < moves; i++) {
      headPosition[1]--;
      tailPosition = updateTail(headPosition, tailPosition);
      visited.add(`${tailPosition[0]}-${tailPosition[1]}`);
    }
  }
  if (direction === 'U') {
    for (let i = 0; i < moves; i++) {
      headPosition[0]++;
      tailPosition = updateTail(headPosition, tailPosition);
      visited.add(`${tailPosition[0]}-${tailPosition[1]}`);
    }
  }
  if (direction === 'D') {
    for (let i = 0; i < moves; i++) {
      headPosition[0]--;
      tailPosition = updateTail(headPosition, tailPosition);
      visited.add(`${tailPosition[0]}-${tailPosition[1]}`);
    }
  }
  return {visitedFromMove: visited, headPosition, tailPosition};
};
const solvePart1 = (filename) => {
  const visited = new Set();
  visited.add('0-0');
  let tailPosition = [0, 0];
  let headPosition = [0, 0];
  readFile((line) => {
    line = line.trim();
    if (line) {
      const parts = line.split(' ');
      const direction = parts[0];
      const moves = Number(parts[1]);
      const result =
                  processMove({headPosition, tailPosition, direction, moves});
      headPosition = result.headPosition;
      tailPosition = result.tailPosition;
      result.visitedFromMove.forEach((item) => visited.add(item));
    }
  },
  filename);
  return visited.size;
};

module.exports = solvePart1;
const filename = resolve(__dirname, './input.txt');
console.log(solvePart1(filename));
