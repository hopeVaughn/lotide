const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }

  return console.log(`🟢🟢🟢 Asstertion Passed: ${array1} === ${array2}`);
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

const without = function(source, itemsToRemove) {
  // Bellow is a more complex syntax to acheive the same result
  // const result = source.filter((e) => !itemsToRemove.includes(e));
  // return result;

  //simpler syntax
  const result = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i]) && !result.includes(source[i])) {
      result.push(source[i]);
    }
  }
  return result;
};

// Tests to see if source param in without() has been mutated
// const test = [1, 2, 3, 4];
// const value = without(test, [1, 3]);
// console.log(test);
// assertArraysEqual(value, [2, 4]);

// Case tests for assertArraysEqual

const value1 = without(['hello', 'world', 'lighthouse'], ['world']);
assertArraysEqual(value1, ['hello', 'lighthouse']); // Passes

const value2 = without(
  ['hey', 'there', 42, undefined, 'buds'],
  [undefined, 42]
);
assertArraysEqual(value2, ['hey', 'there', 'buds']); // Passes

const value3 = without([123, '14', '987', NaN, 42], [NaN, 123]);
assertArraysEqual(value3, [2, 4]); // Fails
