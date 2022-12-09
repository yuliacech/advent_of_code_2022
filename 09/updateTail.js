
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
module.exports = updateTail;
