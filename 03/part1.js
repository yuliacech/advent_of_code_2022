const readFile = require('../utils/read_input_file_line_by_line');
const priorityString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let priorityScore = 0;
const solveDay3 = (filename) => {
    readFile((line) => {
        if (line) {
        const halfLength = line.length / 2;
        const part1 = line.slice(0, halfLength);
        const part2 = line.slice(halfLength);
        for (let i = 0; i < part1.length; i++) {
            if (part2.includes(part1[i])) {
                priorityScore += priorityString.indexOf(part1[i]) + 1;
                break;
            }
        }
        }
    }, filename);
    return priorityScore;
}

module.exports = solveDay3;

console.log(solveDay3('input.txt'));
