const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return console.log(`🟢🟢🟢 Asstertion Passed: ${actual} === ${expected}`);
};

const findKeyByValue = function(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
};

const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
};

assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
