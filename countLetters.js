const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return console.log(`🟢🟢🟢 Asstertion Passed: ${actual} === ${expected}`);
};

const countLetters = function(str) {
  // stops non string vlues from being entered
  if (typeof str !== 'string') {
    return console.log('Sorry your input is not a string');
  }
  // declares a new variable that removes any non letter/white space/number values from source input and splits the input into individual elements
  const splitStr = str.replace(/[^a-zA-Z]/gi, '').split('');
  // creates an empy object to hold the return values
  result = {};
  // creates an iterative loop for object inputs
  for (const ele of splitStr) {
    // if result object is empty place each element in the splitStr input as a key into result with the numerical value of 1
    if (!result[ele]) {
      result[ele] = 1;
      // if result object contains keys the add +1 to each key for how many times they are present in splitStr input
    } else if (result[ele]) {
      result[ele] += 1;
    }
  }
  // returns the result object
  return result;
};

// ---------------------------------------------------------------------

// test cases

const value1 = countLetters('hey my guy, whats shakin bacon?');
const value2 = countLetters('hhh jjj kkk ll m n');
const value3 = countLetters('1,2,3,4,5,mm,nn,p');
const value4 = countLetters('AA,  Ggt &*, AAA');
// console.log(value1);
assertEqual(value1['h'], 3);
assertEqual(value2['j'], 3);
assertEqual(value3['p'], 1);
assertEqual(value4['A'], 4);
