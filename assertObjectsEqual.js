const eqObjects = require('./eqObjects');
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

module.exports = assertObjectsEqual;





