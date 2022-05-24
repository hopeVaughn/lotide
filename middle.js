const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }

  return console.log(`🟢🟢🟢 Asstertion Passed: ${array1} ===  ${array2}`);
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const middle = function(array) {
  const empty = [];

  if (array.length <= 2) {
    return empty;
  }

  array.length % 2 !== 0
    ? empty.push(array[Math.floor(array.length / 2)])
    : empty.push(array[Math.floor((array.length - 1) / 2)]) +
      empty.push(array[Math.floor(array.length / 2)]);

  return empty;
};

// -----------------------------------
// test cases for assertArraysEqual()
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
assertArraysEqual(value1, ['middle']);

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
assertArraysEqual(value2, ['middle', 'middle']);

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
assertArraysEqual(value3, ['middle']);

const value4 = middle([1, 2, 3, 4, 5]);
assertArraysEqual(value4, ['a']);

const value5 = middle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
assertArraysEqual(value5, [5]);

// ------------------------------------------
// tests for first conditional <= 2 elements

// console.log(middle([])); // => []
// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
