const parse = (chars) => {
  const list = [];
  let item = '';
  let char = chars.shift();
  while (char !== undefined) {
    if (char === ']') {
      if (item.length > 0) {
        list.push(item);
      }
      return list;
    }
    if (char === '[') {
      list.push(parse(chars));
    } else if (char === ',') {
      if (item.length > 0) {
        list.push(item);
        item = '';
      }
    } else {
      item += char;
    }
    char = chars.shift();
  }
  return list;
};
const getOrder = (left, right) => {
  if (typeof left === 'object' && typeof right === 'object') {
    const leftItem = left.shift();
    const rightItem = right.shift();

    if (leftItem === undefined && rightItem !== undefined) {
      return 'right';
    }
    if (leftItem !== undefined && rightItem === undefined) {
      return 'wrong';
    }
    let order = getOrder(leftItem, rightItem);
    while (order === 'non-conclusive' &&
        left.length !== 0 &&
        right.length !== 0) {
      order = getOrder(left.shift(), right.shift());
    }
    if (order === 'non-conclusive') {
      if (left.length === 0 && right.length > 0) {
        return 'right';
      }
      if (left.length > 0 && right.length === 0) {
        return 'wrong';
      }
    }
    return order;
  }
  if (typeof left === 'string' && typeof right === 'string') {
    const leftNumber = Number(left);
    const rightNumber = Number(right);
    if (leftNumber === rightNumber) {
      return 'non-conclusive';
    }
    return Number(left) < Number(right) ? 'right' : 'wrong';
  }
  if (typeof left === 'object' && typeof right === 'string') {
    return getOrder(left, [right]);
  }
  if (typeof left === 'string' && typeof right === 'object') {
    return getOrder([left], right);
  }
};
module.exports = {
  parse, getOrder,
};
