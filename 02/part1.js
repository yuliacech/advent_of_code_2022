const readFile = require('../utils/read_input_file_line_by_line');

const yourScores = {X: 1, Y: 2, Z: 3};
const roundScores = {
  'A X': 3,
  'A Y': 6,
  'A Z': 0,
  'B X': 0,
  'B Y': 3,
  'B Z': 6,
  'C X': 6,
  'C Y': 0,
  'C Z': 3,
};

let totalScore = 0;
readFile((line) => {
  if (line) {
    const yourShape = line[2];
    totalScore += yourScores[yourShape] + roundScores[line];
  }
});
console.log({totalScore});
