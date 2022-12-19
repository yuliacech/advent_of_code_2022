const {resolve} = require('path');
const readFile = require('../utils/read_input_file_line_by_line');
const {parse, getOrder} = require('./helpers');

const solve = (filename) => {
  const packets = [
    {id: '[[2]]', array: parse('[[2]]'.split(''))},
    {id: '[[6]]', array: parse('[[6]]'.split(''))},
  ];
  readFile((line) => {
    if (!line) {
    } else {
      packets.push({id: line, array: parse(line.trim().split(''))});
    }
  }, filename);
  const sortedPackets = packets.sort((a, b) => {
    const order = getOrder(
        JSON.parse(JSON.stringify(a.array)),
        JSON.parse(JSON.stringify(b.array)));
    if (order === 'right') {
      return -1;
    }
    if (order === 'wrong') {
      return 1;
    }
    return 0;
  });
  let key = 1;
  sortedPackets.map((p, index) => {
    if (p.id === '[[2]]' || p.id === '[[6]]') {
      key = key * (index + 1);
    }
  });
  return key;
};
module.exports = solve;

const filename = resolve(__dirname, './input.txt');
console.log(solve(filename));
