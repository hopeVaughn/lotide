const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return console.log(`🟢🟢🟢 Asstertion Passed: ${actual} === ${expected}`);
};

// The code bellow would be added to the more complex syntax to help compare objects
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
  let obj1 = Object.keys(object1);
  let obj2 = Object.keys(object2);

  if (obj1.length !== obj2.length) {
    return false;
  } else {
    for (let key of obj1) {
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

// const test1 = { first: 'first', second: 'second' };
// const test2 = { second: 'second', first: 'first' };
// console.log(eqObjects(test1, test2)); // true

// const test3 = { first: 'first', second: 'second', third: 'third' };
// console.log(eqObjects(test1, test3)); // false

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
assertEqual(eqObjects(ab, ba), true); // => true
// console.log(eqObjects(ab, ba)); // true
const abc = { a: '1', b: '2', c: '3' };
// console.log(eqObjects(ab, abc)); // => false
assertEqual(eqObjects(ab, abc), false);
