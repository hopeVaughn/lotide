const middle = require('../middle');
const assertArrayEquals = require('../assertArrayEquals');


const value1 = middle([
  'item',
  'item',
  'item',
  'item',
  'middle',
  'item',
  'item',
  'item',
  'item',
]);
assertArrayEquals(value1, ['middle']);

const value2 = middle([
  'item',
  'item',
  'item',
  'item',
  'middle',
  'middle',
  'item',
  'item',
  'item',
  'item',
]);
assertArrayEquals(value2, ['middle', 'middle']);

const value3 = middle([
  'item',
  'item',
  'item',
  'item',
  'middle',
  'middle',
  'item',
  'item',
  'item',
  'item',
]);
assertArrayEquals(value3, ['middle']);

const value4 = middle([1, 2, 3, 4, 5]);
assertArrayEquals(value4, ['a']);

const value5 = middle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
assertArrayEquals(value5, [5]);
