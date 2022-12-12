const fs = require('fs');
const {resolve} = require('path');

const processInitialData = (initialData) => {
  const monkeys = [];
  for (let i = 0; i < initialData.length; i++) {
    const lines = initialData[i].trim().split('\n');
    const items = lines[1].trim().replace('Starting items: ', '').split(',')
        .map((item) => BigInt(item.trim()));
    const operation = getOperation(lines[2].trim());
    const divisor = BigInt(lines[3].trim().replace('Test: divisible by ', ''));
    const successMonkey = Number(lines[4].trim()
        .replace('If true: throw to monkey ', ''));
    const failedMonkey = Number(lines[5].trim()
        .replace('If false: throw to monkey ', ''));
    monkeys.push({
      items,
      operation,
      divisor,
      successMonkey,
      failedMonkey,
      inspections: BigInt(0),
    });
  }
  return monkeys;
};

const getOperation = (line) => {
  const operationString = line.replace('Operation: new = ', '');
  const parts = operationString.split(/\s[+*]\s/);
  if (parts[0] === 'old') {
    if (parts[1] === 'old') {
      return operationString.includes('+') ?
          (value) => value + value : (value) => value * value;
    }
    return operationString.includes('+') ?
          (value) => value + BigInt(parts[1]) :
          (value) => value * BigInt(parts[1]);
  }
  if (parts[1] === 'old') {
    return operationString.includes('+') ?
        (value) => BigInt(parts[0]) + value :
        (value) => BigInt(parts[0]) * value;
  }
  return operationString.includes('+') ?
      (value) => BigInt(parts[0]) + BigInt(parts[1]) :
      (value) => BigInt(parts[0]) * BigInt(parts[1]);
};

const solve = (filename, rounds, isRelief) => {
  const data = fs.readFileSync(filename, 'utf8').trim();
  const initialData = data.split('\n\n');
  const monkeys = processInitialData(initialData);
  let allDivisors = 1n;
  monkeys.map((m) => {
    allDivisors = allDivisors * m.divisor;
  });
  for (let i = 0; i < rounds; i++) {
    // process each monkey
    for (let j = 0; j < monkeys.length; j++) {
      const {items, operation, divisor, successMonkey,
        failedMonkey, inspections} = monkeys[j];
      let inspectionsCount = inspections;
      // process each item
      items.map((item) => {
        // inspection
        inspectionsCount = inspectionsCount + 1n;
        let worryLevel = operation(item);
        // relief
        if (isRelief) {
          worryLevel = worryLevel / 3n;
        }
        // test
        const remainder = worryLevel % divisor;
        let destMonkey;
        if (remainder == BigInt(0)) {
          destMonkey = successMonkey;
        } else {
          destMonkey = failedMonkey;
        }
        // manage
        if (!isRelief) {
          worryLevel = worryLevel % allDivisors;
        }
        // throw
        monkeys[destMonkey].items.push(worryLevel);
      });
      monkeys[j].items = [];
      monkeys[j].inspections = inspectionsCount;
    }
  }

  let max1 = BigInt(0);
  let max2 = BigInt(0);
  monkeys.map((monkey) => {
    if (monkey.inspections > max1) {
      max2 = max1;
      max1 = monkey.inspections;
    } else if (monkey.inspections > max2) max2 = monkey.inspections;
  });
  return max1 * max2;
};

module.exports = solve;

const filename = resolve(__dirname, './input.txt');
console.log(solve(filename, 20, true));
console.log(solve(filename, 10000, false));
