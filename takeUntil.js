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

//---------------------------------------------------------
const value1 = [1, 2, 3, 4, 5, 6, 4];
const value2 = ['hey', 'buds', 'nice, to', ',', 'meet,', 'you'];

//-----------------------------

const takeUntil = function(array, callback) {
  const final = [];
  for (let arr of array) {
    if (!callback(arr)) {
      break;
    } else {
      final.push(arr);
    }
  }
  return final;
};

const result1 = takeUntil(value1, (e) => e <= 5);
// console.log(result1);
const result2 = takeUntil(value2, (e) => e !== `,`);
// console.log(result2);

assertArrayEquals(result1, [1, 2, 3, 4, 5]);
assertArrayEquals(result2, ['hey', 'buds', 'nice, to']);
