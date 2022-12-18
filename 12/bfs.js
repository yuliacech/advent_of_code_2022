
const isAllowedField = ({grid, height, row, index}) => {
  if (row > -1 && row < grid.length &&
        index > -1 && index < grid[row].length) {
    const newHeight = grid[row][index];
    return newHeight < (height + 2);
  }
  return false;
};

const getNeighbors = (grid, node) => {
  const children = [];
  const [row, index] = node.split(',').map((part) => Number(part));
  // field to the right
  if (isAllowedField({grid, height: grid[row][index], row, index: index + 1})) {
    children.push(`${row},${index + 1}`);
  }
  // field to the left
  if (isAllowedField({grid, height: grid[row][index], row, index: index - 1})) {
    children.push(`${row},${index - 1}`);
  }
  // field below
  if (isAllowedField({grid, height: grid[row][index], row: row + 1, index})) {
    children.push(`${row + 1},${index}`);
  }
  // field above
  if (isAllowedField({grid, height: grid[row][index], row: row - 1, index})) {
    children.push(`${row - 1},${index}`);
  }
  return children;
};

const bfs = ({grid, start, end}) => {
  const visited = [start];
  const queue = [{node: start, count: 0}];
  let result;
  while (queue.length > 0) {
    const {node, count} = queue.shift();
    const neighbors = getNeighbors(grid, node);
    neighbors.forEach((neighbor) => {
      if (!visited.includes(neighbor)) {
        if (neighbor === end) {
          result = count + 1;
          return;
        }
        visited.push(neighbor);
        queue.push({node: neighbor, count: count + 1});
      }
    });
  }
  return result;
};
module.exports = bfs;
