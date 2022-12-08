const readFile = require('../utils/read_input_file_line_by_line');

const roundShapes = {
  'A X': 'C',
  'A Y': 'A',
  'A Z': 'B',
  'B X': 'A',
  'B Y': 'B',
  'B Z': 'C',
  'C X': 'B',
  'C Y': 'C',
  'C Z': 'A',
};
const roundScores = {
  X: 0,
  Y: 3,
  Z: 6,
};
const yourScores = {A: 1, B: 2, C: 3};


let totalScore = 0;
readFile((line) => {
  if (line) {
    const yourShape = roundShapes[line];
    totalScore += yourScores[yourShape] + roundScores[line[2]];
  }
});
console.log({totalScore});
