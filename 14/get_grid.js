const getGrid = (input) => {
  const grid = {};
  const lines = input.trim().split('\n');
  let maxX = 500;
  let maxY = 0;
  lines.forEach((line) => {
    const points = line.trim().split(' -> ');
    let start = points.shift();
    let end = points.shift();
    while (end !== undefined) {
      const [startX, startY] = start.trim().split(',')
          .map((item) => Number(item));
      const [endX, endY] = end.trim().split(',')
          .map((item) => Number(item));
      if (startX > maxX) {
        maxX = startX;
      }
      if (endX > maxX) {
        maxX = endX;
      }
      if (startY > maxY) {
        maxY = startY;
      }
      if (endY > maxY) {
        maxY = endY;
      }
      if (startX === endX) {
        if (startY < endY) {
          for (let i = startY; i <= endY; i++) {
            if (!grid[startX]) {
              grid[startX] = {};
            }
            grid[startX][i] = '#';
          }
        } else {
          for (let i = endY; i <= startY; i++) {
            if (!grid[startX]) {
              grid[startX] = {};
            }
            grid[startX][i] = '#';
          }
        }
      } else if (startX < endX) {
        for (let i = startX; i <= endX; i++) {
          if (!grid[i]) {
            grid[i] = {};
          }
          grid[i][startY] = '#';
        }
      } else {
        for (let i = endX; i <= startX; i++) {
          if (!grid[i]) {
            grid[i] = {};
          }
          grid[i][startY] = '#';
        }
      }
      start = end;
      end = points.shift();
    }
  });
  return [grid, maxY];
};

module.exports = getGrid;
