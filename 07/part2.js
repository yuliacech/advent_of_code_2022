const getFilesystem = require('./get_filesystem');
const {resolve} = require("path");


const findSmallestFolder = (folder, toFreeSpace, neededSpace) => {

    let smallestSize = neededSpace;

    if (folder['size'] >= toFreeSpace && folder['size'] < smallestSize) {
        smallestSize = folder['size'];
    }
    Object.keys(folder).map(key => {
        const item = folder[key];
        if (typeof item === 'object') {
            const itemSmallestSize = findSmallestFolder(item, toFreeSpace, neededSpace);
            if (itemSmallestSize < smallestSize) {
                smallestSize = itemSmallestSize;
            }
        }
    });

    return smallestSize;

}

const solvePart2 = (filename) => {
    const filesystem = getFilesystem(filename);
    const totalSpace = 70000000;
    const neededSpace = 30000000;
    const usedSpace = filesystem['/']['size'];
    const availableSpace = totalSpace - usedSpace;
    const toFreeSpace = neededSpace - availableSpace;
    return findSmallestFolder(filesystem['/'], toFreeSpace, neededSpace);
}

module.exports = solvePart2;
const filename = resolve(__dirname, './input.txt');
console.log(solvePart2(filename));
