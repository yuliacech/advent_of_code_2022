const readFile = require("../utils/read_input_file_line_by_line");

const isCdCommand = (line) => {
    return line.startsWith('$ cd ');
}
const isNotFileList = (line) => {
    return line.startsWith('$ ') || !line;
}
const getFolderSize = (folder) => {
    let size = 0;
    Object.keys(folder).map(key => {
        const item = folder[key];
        if (typeof item === 'object') {
            size += getFolderSize(item);
        } else {
            size += Number(item);
        }
    });
    folder['size'] = size;
    return size;
};


const updateFilesystem = (path, list, filesystem) => {
    if (!filesystem) {
        filesystem = {};
    }
    if (path.length === 0) {
        list.map(item => {
            if (item.startsWith('dir ')) {
                const dirName = item.replace('dir ', '').trim();
                filesystem[dirName] = {};
            } else {
                const parts = item.trim().split(' ');
                filesystem[parts[1]] = parts[0];
            }
        });
        return filesystem;
    }
    const currentFolder = path.shift();
    filesystem[currentFolder] = updateFilesystem(path, list, filesystem[currentFolder]);
    return filesystem;
}
const getFilesystem = (filename) => {
    let currentPath = [];
    let tempList = [];
    let filesystem = {'/': {}};
    readFile((line) => {
        if (isNotFileList(line)) {
            // check if this is the 1st command after a file list
            if (tempList.length > 0) {
                // add the temp list to the filesystem
                filesystem = updateFilesystem([...currentPath], tempList, filesystem);
                // reset the temp list
                tempList = [];
            }
            if (isCdCommand(line)) {
                // update the current path
                const destDir = line.trim().replace('$ cd ', '');
                if (destDir === '/') {
                    currentPath = [destDir];
                } else if (destDir === '..') {
                    currentPath.pop();
                } else {
                    currentPath.push(destDir);
                }
            }
        } else {
            // add a file/dir to the temp list
            tempList.push(line);
        }
    }, filename);
    getFolderSize(filesystem['/']);
    return filesystem;
}
module.exports = getFilesystem;
