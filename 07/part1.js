const getFilesystem = require('./get_filesystem');
const {resolve} = require("path");


const getTotalSizeLess100000 = (folder) => {
    let totalSize = 0;
    if (folder['size'] < 100000) {
        totalSize += folder['size'];
    }
    Object.keys(folder).map(key => {
        const item = folder[key];
        if (typeof item === 'object') {
            totalSize += getTotalSizeLess100000(item);
        }
    });

    return totalSize;
};
const solvePart1 = (filename) => {
    const filesystem = getFilesystem(filename);
    return getTotalSizeLess100000(filesystem['/']);
}

module.exports = solvePart1;
const filename = resolve(__dirname, './input.txt');
console.log(solvePart1(filename));
