const solve = (input, chunkLength) => {
  let index = 0;
  while (index < input.length - chunkLength) {
    const chunk = input.slice(index, index + chunkLength);
    if (new Set(chunk).size === chunkLength) {
      break;
    }
    index++;
  }
  return index + chunkLength;
};
module.exports = solve;
