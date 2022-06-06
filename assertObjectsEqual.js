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

// eqArray starts
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

// eqObject Starts
const eqObjects = function(object1, object2) {
  let obj1 = Object.keys(object1);
  let obj2 = Object.keys(object2);

  if (obj1.length !== obj2.length) {
    return false;
  } else {
    for (let key of obj1) {
      console.log(obj1[key]);
      if (obj1[key] !== obj2[key]) {
        return false;
      } else {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
          return eqArrays(object1[key], object2[key]);
        } else if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
};

//--------------------------------------------------------------
// Test cases
const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
// console.log(eqObjects(cd, dc));
assertObjectsEqual(cd, dc);

const cd2 = { c: '1', d: ['2', 3, 4] };
assertObjectsEqual(cd, cd2);
// console.log(eqObjects(cd, cd2));
