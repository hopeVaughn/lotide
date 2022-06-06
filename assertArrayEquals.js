const eqArrays = require('./eqArrays');
const assertArrayEquals = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

  return console.log(`🟢🟢🟢 Asstertion Passed: ${actual} ===  ${expected}`);
};

module.exports = assertArrayEquals;




