const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) {
    return console.log(
      `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
  return console.log(
    `🟢🟢🟢 Asstertion Passed: ${inspect(actual)} === ${inspect(expected)}`
  );
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
  console.log(result);
  return result;
};

//--------------------------------------------------------------
// Test cases
const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
assertObjectsEqual(cd, dc);

const cd2 = { c: '1', d: ['2', 3, 4] };
assertObjectsEqual(cd, cd2);
