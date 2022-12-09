const {resolve} = require('path');
const readFile = require('../utils/read_input_file_line_by_line');
const updateTail = require('./updateTail');
const processMove = ({rope, direction, moves}) => {
  const visited = new Set();
  const headPosition = rope[0];
  if (direction === 'R') {
    for (let i = 0; i < moves; i++) {
      headPosition[1]++;
      rope = updateRope(rope);
      const tailPosition = rope[rope.length - 1];
      visited.add(`${tailPosition[0]}-${tailPosition[1]}`);
    }
  }
  if (direction === 'L') {
    for (let i = 0; i < moves; i++) {
      headPosition[1]--;
      rope = updateRope(rope);
      const tailPosition = rope[rope.length - 1];
      visited.add(`${tailPosition[0]}-${tailPosition[1]}`);
    }
  }
  if (direction === 'U') {
    for (let i = 0; i < moves; i++) {
      headPosition[0]++;
      rope = updateRope(rope);
      const tailPosition = rope[rope.length - 1];
      visited.add(`${tailPosition[0]}-${tailPosition[1]}`);
    }
  }
  if (direction === 'D') {
    for (let i = 0; i < moves; i++) {
      headPosition[0]--;
      rope = updateRope(rope);
      const tailPosition = rope[rope.length - 1];
      visited.add(`${tailPosition[0]}-${tailPosition[1]}`);
    }
  }
  return {visitedFromMove: visited, rope};
};
const updateRope = (rope) => {
  for (let i = 0; i < rope.length - 1; i++) {
    const head = rope[i];
    let tail = rope[i + 1];
    tail = updateTail(head, tail);
    rope[i + 1] = tail;
  }
  return rope;
};
const solvePart1 = (filename) => {
  const visited = new Set();
  visited.add('0-0');
  let rope = [];
  for (let i = 0; i < 10; i++) {
    rope[i] = [0, 0];
  }
  readFile((line) => {
    line = line.trim();
    if (line) {
      const parts = line.split(' ');
      const direction = parts[0];
      const moves = Number(parts[1]);
      const result =
                  processMove({rope, direction, moves});
      rope = result.rope;
      result.visitedFromMove.forEach((item) => visited.add(item));
    }
  },
  filename);
  return visited.size;
};

module.exports = solvePart1;
const filename = resolve(__dirname, './input.txt');
console.log(solvePart1(filename));
