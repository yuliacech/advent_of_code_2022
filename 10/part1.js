const {resolve} = require('path');
const readFile = require('../utils/read_input_file_line_by_line');
const solvePart1 = (filename) => {
  const cycles = [20, 60, 100, 140, 180, 220];
  const signalStrengths = [];
  let register = 1;
  let cycleCount = 0;
  readFile((line) => {
    line = line.trim();
    if (line) {
      if (line.startsWith('noop')) {
        cycleCount += 1;
      } else if (line.startsWith('addx ')) {
        cycleCount += 2;
        const cycle = cycles[signalStrengths.length];
        if (cycle <= cycleCount) {
          signalStrengths.push(cycle * register);
        }
        register = register + Number(line.replace('addx ', ''));
      }
    }
  },
  filename);
  return signalStrengths.reduce((prev, current) => (prev + current), 0);
};

module.exports = solvePart1;
const filename = resolve(__dirname, './input.txt');
console.log(solvePart1(filename));
