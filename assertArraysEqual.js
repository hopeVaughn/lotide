const assertArrayEquals = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

  return console.log(`🟢🟢🟢 Asstertion Passed: ${actual} ===  ${expected}`);
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

assertArrayEquals([4, 3, 1, 2, 5], [4, 3, 1, 2, 5]);
assertArrayEquals([4, 3, 1, 2, 5], [4, 3, 1, 2, 5]);
assertArrayEquals(['3', '4', '2', '1', '5'], ['3', '4', '2', '1', '5']);
assertArrayEquals(['a', 'b', 'd', 'c', 'e'], ['b', 'd', 'A', 'e', 'c']);
assertArrayEquals(['a', 'b', 'd', 'c', 'e'], ['a', 'd', 'a', 'e']);
