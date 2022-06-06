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

const flatten = function(array) {

  const result = [];
  for (let i = 0; i < array.length; ++i) {
    let value = array[i];
    if (Array.isArray(value)) {
      for (let j = 0; j < value.length; ++j) {
        result.push(value[j]);
      }
    } else {
      result.push(value);
    }
  }
  return result;
};

// --------------------------------------------------------------------------
// Test cases for flatten
console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten(['a', 'b', [3, 4]]));
console.log(flatten([['a'], 'b', [3, 4], ['c', 'd']]));

// -------------------------------------------------------------------------
// Test case with assertEqualsArray

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([['a'], 'b', [3, 4], ['c', 'd']]), [
  'a',
  'b',
  3,
  4,
  'c',
  'd',
]);
assertArraysEqual(flatten(['a', 'b', [3, 4]], ['a', 'b', 3, 4]));
// -------------------------------------------------------------------------
// test cases for flatten() using reduce()

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

// test cases using assertArraysEqual() with reduce()

// const value1 = flatten([1, 2, [3, 4], 5, [6]]);
// assertArraysEqual(value1, [1, 2, 3, 4, 5, 6]);
// const value2 = flatten([[1], [2], [3], [4], [5]]);
// assertArraysEqual(value2, [1, 2, 3, 4, 5, 6]);
// const value3 = flatten([['I am'], 'a very', ['silly'], 'goose', ['yall']]);
// assertArraysEqual(value3, ['I am', 'a very', 'silly', 'goose', 'yall']);
// const value4 = flatten([
//   ['The answer to life'],
//   'the universe',
//   ['and every thing in it'],
//   'is',
//   42,
// ]);
// assertArraysEqual(value4, [
//   'the answer to life',
//   'the universe',
//   'and everyting in it',
//   'is',
//   42,
// ]);
