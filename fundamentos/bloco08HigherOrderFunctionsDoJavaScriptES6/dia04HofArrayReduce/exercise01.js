// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, curr) => [`${acc}, ${curr}`]);
}
console.log(flatten());

const arrays2 = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten2() {
  return arrays2.reduce((acc, curr) => acc.concat(curr), []);
}
console.log(flatten2());