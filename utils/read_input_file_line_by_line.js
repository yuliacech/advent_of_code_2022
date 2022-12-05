const fs = require("fs");
const readInputFileLineByLine = (callbackFn, filename) => {
    const allFileContents = fs.readFileSync(filename ?? 'input.txt', 'utf-8');
    allFileContents.split(/\r?\n/).forEach(line =>  {
        callbackFn(line);
    });
}
module.exports = readInputFileLineByLine;
