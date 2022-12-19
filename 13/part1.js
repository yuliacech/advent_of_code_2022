const {resolve} = require('path');
const readFile = require('../utils/read_input_file_line_by_line');
const {parse, getOrder} = require('./helpers');

const solve = (filename) => {
  let sum = 0;
  let pair = [];
  let counter = 1;
  readFile((line) => {
    if (!line) {
      const order = getOrder(
          parse(pair[0].split('')),
          parse(pair[1].split('')),
      );
      if (order === 'right') {
        sum += counter;
      }
      pair = [];
      counter++;
    } else {
      pair.push(line.trim());
    }
  }, filename);
  return sum;
};
module.exports = solve;

const filename = resolve(__dirname, './input.txt');
console.log(solve(filename));
