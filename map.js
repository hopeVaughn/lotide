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

const words = ['ground', 'control', 'to', 'major', 'tom'];
const numbers = [3, 4, 5, 6, 7, 8, 9];
const input = ['a', 'b', 'c', 'd', 'e'];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const result1 = map(words, (word) => word[0]);
const result2 = map(numbers, (num) => num * num);
const result3 = map(input, (e) => e + `${e}`);

assertArrayEquals(result1, ['g', 'c', 't', 'm', 't']);
assertArrayEquals(result2, [9, 16, 25, 36, 49, 64, 81]);
assertArrayEquals(result3, ['aa', 'bb', 'cc', 'dd', 'ee']);
