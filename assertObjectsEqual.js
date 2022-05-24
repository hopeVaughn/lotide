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

// const eqArrays = function (array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }

//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

const eqObjects = function(object1, object2) {
  // I was advised that the following methodology was too complex for this this stage in the program and to use simpler methodology to acheive the same result.
  //   const result =
  //     typeof object1 === 'object' && Object.keys(object1).length > 0
  //       ? Object.keys(object1).length === Object.keys(object2).length &&
  //         Object.keys(object1).every((e) => eqArrays(object1[e], object2[e]))
  //       : object1 === object2;
  //   return result;

  // Simpler syntax

  for (let ele in object1) {
    if (object1.hasOwnProperty(ele)) {
      if (!object2.hasOwnProperty(ele)) return false;
      if (object1[ele] !== object2[ele]) return false;
    }
  }
  for (let key in object2) {
    if (object2.hasOwnProperty(key)) {
      if (!object1.hasOwnProperty(key)) return false;
      if (object1[key] !== object2[key]) return false;
    }
    return true;
  }
};

//--------------------------------------------------------------
// Test cases
const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
assertObjectsEqual(cd, dc);

const cd2 = { c: '1', d: ['2', 3, 4] };
assertObjectsEqual(cd, cd2);
