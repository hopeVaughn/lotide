const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return console.log(`🟢🟢🟢 Asstertion Passed: ${actual} === ${expected}`);
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

const eqObjects = function(object1, object2) {
  const result =
    typeof object1 === 'object' && Object.keys(object1).length > 0
      ? Object.keys(object1).length === Object.keys(object2).length &&
        Object.keys(object1).every((p) => eqArrays(object1[p], object2[p]))
      : object1 === object2;
  return result;
};

// As a note I believe instead of using eqArrays inside the ternary operation I could have passed in eqObjects recursivley to accomplish the same thing.

// const test1 = { first: 'first', second: 'second' };
// const test2 = { second: 'second', first: 'first' };
// console.log(eqObjects(test1, test2)); // true

// const test3 = { first: 'first', second: 'second', third: 'third' };
// console.log(eqObjects(test1, test3)); // false

const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
assertEqual(eqObjects(cd, dc), true); // true

const cd2 = { c: '1', d: ['2', 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // false
