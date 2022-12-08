const solvePart2 = require('../part2');

describe('day 6 part 2', () => {
  [
    ['mjqjpqmgbljsphdztnvjfqwrcgsmlb', 19],
    ['bvwbjplbgvbhsrlpgdmjqwftvncz', 23],
    ['nppdvjthqldpwncqszvftbrmjlhg', 23],
    ['nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 29],
    ['zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 26]].map((input) => {
    test('solves the example input', () => {
      expect(solvePart2(input[0])).toBe(input[1]);
    });
  });
});

