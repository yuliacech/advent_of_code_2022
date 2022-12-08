const readFile = require('../utils/read_input_file_line_by_line');
const priorityString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let priorityScore = 0;
let rucksacks = [];
const solveDay3Part2 = (filename) => {
  readFile((line) => {
    if (rucksacks.length === 3) {
      // find the common char
      for (let i = 0; i < rucksacks[0].length; i++) {
        if (rucksacks[1].includes(rucksacks[0][i]) &&
            rucksacks[2].includes(rucksacks[0][i])) {
          priorityScore += priorityString.indexOf(rucksacks[0][i]) + 1;
          break;
        }
      }

      // reset the rucksack groups
      rucksacks = [line];
    } else {
      // continue the group
      rucksacks.push(line);
    }
  }, filename);
  return priorityScore;
};

module.exports = solveDay3Part2;

console.log(solveDay3Part2('input.txt'));
