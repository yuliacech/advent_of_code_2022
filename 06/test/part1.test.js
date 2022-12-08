const solvePart1 = require('../part1');

describe('day 6 part 1', () => {
  [
    ['mjqjpqmgbljsphdztnvjfqwrcgsmlb', 7],
    ['bvwbjplbgvbhsrlpgdmjqwftvncz', 5],
    ['nppdvjthqldpwncqszvftbrmjlhg', 6],
    ['nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 10],
    ['zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 11]].map((input) => {
    test('solves the example input', () => {
      expect(solvePart1(input[0])).toBe(input[1]);
    });
  });
});

