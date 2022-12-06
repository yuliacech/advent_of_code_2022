const readFile = require('../utils/read_input_file_line_by_line');

const solve = (filename) => {
    let isCratesInput = true;
    let crates = {};
    readFile((line) => {
            if (isCratesInput && !line) {
                isCratesInput = false;
            }
            if (isCratesInput) {
                const chunks = line.match(/.{1,4}/g);
                for (let i = 0; i < chunks.length; i++) {
                    const crateContent = chunks[i][1];
                    if (crateContent.match(/[A-Z]/)) {
                        if (crates[i + 1]) {
                            crates[i + 1].push(crateContent);
                        } else {
                            crates[i + 1] = [crateContent];
                        }
                    }
                }
            } else {
                line = line.trim();
                if (line) {
                    const matches = line.match(/\d+/g);
                    const crateCount = Number(matches[0]);
                    const crateSource = matches[1];
                    const crateDest = matches[2];
                    let movedContent = crates[crateSource].splice(0, crateCount);
                    //movedContent = movedContent.reverse();
                    crates[crateDest].unshift(...movedContent);

                }
            }

    }, filename);
    const result = Object.keys(crates).map((index) => crates[index][0]).join('');
    return result;
}

module.exports = solve;

console.log(solve('input.txt'));
