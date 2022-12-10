const {resolve} = require('path');
const readFile = require('../utils/read_input_file_line_by_line');
const paint = (screen, register, cycleCount) => {
  cycleCount = cycleCount - 1;
  const screenWidth = 40;
  const quotient = Math.floor(cycleCount/screenWidth);
  const position = cycleCount % screenWidth;
  const pixel = (position >= register - 1) && (position <= register + 1) ?
      '#' : '.';
  screen[quotient] = screen[quotient].concat(pixel);
  return screen;
};
const solvePart1 = (filename) => {
  let screen = ['', '', '', '', '', ''];
  let register = 1;
  let cycleCount = 0;
  readFile((line) => {
    line = line.trim();
    if (line) {
      if (line.startsWith('noop')) {
        cycleCount += 1;
        // paint 1
        screen = paint(screen, register, cycleCount);
      } else if (line.startsWith('addx ')) {
        cycleCount += 1;
        // paint 1
        screen = paint(screen, register, cycleCount);
        cycleCount += 1;
        // paint 2
        screen = paint(screen, register, cycleCount);
        register = register + Number(line.replace('addx ', ''));
      }
    }
  },
  filename);
  return screen;
};

module.exports = solvePart1;
const filename = resolve(__dirname, './input.txt');
console.log(solvePart1(filename));
