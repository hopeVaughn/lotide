// Colourful replacement for the assert() method for the tail of an array
const assertEqual = function(actual, expected) {
  if (actual[0] !== expected[0]) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return console.log(`🟢🟢🟢 Asstertion Passed: ${actual} === ${expected}`);
};

// Function that will return every value in a given array minus the first index

const tail = function(array) {
  if (array === undefined) {
    return;
  }
  if (array.length === 0) {
    return [];
  }
  let newArray = array.slice(1);
  return newArray;
};

assertEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
assertEqual(tail(['hello', 'how', 'are', 'you']), ['how', 'are', 'you']);
assertEqual(tail([1]), [1]);
assertEqual(tail(['hi', 'there']), []);
