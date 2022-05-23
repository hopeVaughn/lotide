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

const flatten = (array) => {
  return array.reduce((flat, toBeFlattened) => {
    if (Array.isArray(toBeFlattened)) {
      return flat.concat(...flatten(toBeFlattened));
    }
    return flat.concat(toBeFlattened);
  }, []);
};

// -------------------------------------------------------------------------

// testing flatten()

// console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
// console.log(flatten([[1], [2], [3], [4], [5]])); // => [1, 2, 3, 4, 5]
// console.log(flatten([['I am'], 'a very', ['silly'], 'goose', ['yall']])); // => ['I am','a very','silly','goose','yall']
// console.log(
//   flatten([
//     ['The answer to life'],
//     'the universe',
//     ['and every thing in it'],
//     'is',S
//     42,
//   ])
// );
// ['the answer to life','the universe','and everyting in it','is',42]

// --------------------------------------------------------

// test cases using assertArraysEqual()

const value1 = flatten([1, 2, [3, 4], 5, [6]]);
assertArraysEqual(value1, [1, 2, 3, 4, 5, 6]);
const value2 = flatten([[1], [2], [3], [4], [5]]);
assertArraysEqual(value2, [1, 2, 3, 4, 5, 6]);
const value3 = flatten([['I am'], 'a very', ['silly'], 'goose', ['yall']]);
assertArraysEqual(value3, ['I am', 'a very', 'silly', 'goose', 'yall']);
const value4 = flatten([
  ['The answer to life'],
  'the universe',
  ['and every thing in it'],
  'is',
  42,
]);
assertArraysEqual(value4, [
  'the answer to life',
  'the universe',
  'and everyting in it',
  'is',
  42,
]);
