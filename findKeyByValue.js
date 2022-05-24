const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return console.log(`🟢🟢🟢 Asstertion Passed: ${actual} === ${expected}`);
};

const findKeyByValue = function(object, value) {
  // I was advised that the following methodology was too complex for this this stage in the program and to use simpler methodology to acheive the same result.
  // return Object.keys(object).find((key) => object[key] === value);

  // simpler syntax
  let result = '';
  for (key in object) {
    if (value === object[key]) {
      result = key;
    }
  }
  return result;
};

const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
};

console.log(findKeyByValue(bestTVShowsByGenre, 'The Wire'));
assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
