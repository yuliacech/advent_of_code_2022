const readFile = require('../utils/read_input_file_line_by_line');
const processMove = ({headPosition, tailPosition, direction, moves}) => {
  const visited = new Set();
  if (direction === 'R') {
    for (let i = 0; i < moves; i++) {
      headPosition[1]++;
      tailPosition = updateTail(headPosition, tailPosition);
      visited.add(`${tailPosition[0]}-${tailPosition[1]}`);
    }
  }
  if (direction === 'L') {
    for (let i = 0; i < moves; i++) {
      headPosition[1]--;
      tailPosition = updateTail(headPosition, tailPosition);
      visited.add(`${tailPosition[0]}-${tailPosition[1]}`);
    }
  }
  if (direction === 'U') {
    for (let i = 0; i < moves; i++) {
      headPosition[0]++;
      tailPosition = updateTail(headPosition, tailPosition);
      visited.add(`${tailPosition[0]}-${tailPosition[1]}`);
    }
  }
  if (direction === 'D') {
    for (let i = 0; i < moves; i++) {
      headPosition[0]--;
      tailPosition = updateTail(headPosition, tailPosition);
      visited.add(`${tailPosition[0]}-${tailPosition[1]}`);
    }
  }
  return {visitedFromMove: visited, headPosition, tailPosition};
};
const updateTail = (headPosition, tailPosition) => {
  // if in the same column
  if (headPosition[1] === tailPosition[1]) {
    // head is above tail, move tail up
    if (headPosition[0] > (tailPosition[0] + 1)) {
      tailPosition[0]++;
      return tailPosition;
    }
    // head is below tail, move tail down
    if (headPosition[0] < (tailPosition[0] - 1)) {
      tailPosition[0]--;
      return tailPosition;
    }
    return tailPosition;

    // if in the same row
  } else if (headPosition[0] === tailPosition[0]) {
    // head to the right of the tail, move tail right
    if (headPosition[1] > (tailPosition[1] + 1)) {
      tailPosition[1]++;
      return tailPosition;
    }
    // head to the left of the tail, move tail left
    if (headPosition[1] < (tailPosition[1] - 1)) {
      tailPosition[1]--;
      return tailPosition;
    }
    return tailPosition;

    // head and tail in different columns and rows, move tail diagonally
  } else {
    // head is above tail
    if (headPosition[0] > tailPosition[0]) {
      // head is to the right and not touching
      if (headPosition[1] > tailPosition[1] &&
          !(headPosition[0] === (tailPosition[0] + 1) &&
              headPosition[1] === (tailPosition[1] + 1))
      ) {
        tailPosition[0]++;
        tailPosition[1]++;
        return tailPosition;

        // head is to the left and not touching
      } else if (headPosition[1] < tailPosition[1] &&
          !(headPosition[0] === (tailPosition[0] + 1) &&
              headPosition[1] === (tailPosition[1] - 1))
      ) {
        tailPosition[0]++;
        tailPosition[1]--;
        return tailPosition;
      }
      return tailPosition;

      // head is below tail
    } else if (headPosition[0] < tailPosition[0]) {
      // head is to the right and not touching
      if (headPosition[1] > tailPosition[1] &&
          !(headPosition[0] === (tailPosition[0] - 1) &&
                  headPosition[1] === (tailPosition[1] + 1)
          )
      ) {
        tailPosition[0]--;
        tailPosition[1]++;
        return tailPosition;

        // head is to the left and not touching
      } else if (headPosition[1] < tailPosition[1] &&
          !(headPosition[0] === (tailPosition[0] - 1) &&
              headPosition[1] === (tailPosition[1] - 1)
          )
      ) {
        tailPosition[0]--;
        tailPosition[1]--;
        return tailPosition;
      }
      return tailPosition;
    }
  }
  return tailPosition;
};
const solvePart1 = (filename) => {
  const visited = new Set();
  visited.add('0-0');
  let tailPosition = [0, 0];
  let headPosition = [0, 0];
  readFile((line) => {
    line = line.trim();
    if (line) {
      const parts = line.split(' ');
      const direction = parts[0];
      const moves = Number(parts[1]);
      const result =
                  processMove({headPosition, tailPosition, direction, moves});
      headPosition = result.headPosition;
      tailPosition = result.tailPosition;
      result.visitedFromMove.forEach((item) => visited.add(item));
    }
  },
  filename);
  return visited.size;
};

module.exports = solvePart1;
console.log(solvePart1('input.txt'));
