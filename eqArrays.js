// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

  return console.log(`🟢🟢🟢 Asstertion Passed: ${actual} === ${expected}`);
};

const eqArrays = function (array1, array2) {
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

assertEqual(eqArrays([4, 3, 1, 2, 5], [3, 1, 2, 5, 4]), false);
assertEqual(eqArrays([4, 2, 1, 3], [4, 2, 1, 3]), true);
assertEqual(
  eqArrays(['3', '4', '2', '1', '5'], ['3', '4', '2', '1', '5']),
  true
);
assertEqual(
  eqArrays(['a', 'b', 'd', 'c', 'e'], ['b', 'd', 'A', 'e', 'c']),
  false
);
assertEqual(eqArrays(['a', 'b', 'd', 'c', 'e'], ['a', 'd', 'a', 'e']), false);
