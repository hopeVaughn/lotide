const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return console.log(`🟢🟢🟢 Asstertion Passed: ${actual} === ${expected}`);
};

const findKeyByValue = function(object, value) {
  // this returns object as an array of strings corresponding to the properties found in the object parameter. Then find() executes a call back function once for each index of the array until it returns the key from the object thats strictly equal to the value parameter.
  return Object.keys(object).find((key) => object[key] === value);
};

const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
};

// console.log(findKeyByValue(bestTVShowsByGenre, 'The Wire'));
// console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));

findKeyByValue(bestTVShowsByGenre, 'The Wire');
findKeyByValue(bestTVShowsByGenre, "That '70s Show");

assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
