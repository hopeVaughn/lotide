const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return console.log(`🟢🟢🟢 Asstertion Passed: ${actual} === ${expected}`);
};

const countLetters = function(str) {
  if (typeof str !== 'string') {
    return console.log('Sorry your input is not a string');
  }
  // The line bellow is an addition to an edge case that would eliminate white space and any non-letter characters using regex.
  // const splitStr = str.replace(/[^a-zA-Z]/gi, '').split('');
  let result = {};

  for (const ele of str) {
    if (!result[ele]) {
      result[ele] = 1;
    } else {
      result[ele] += 1;
    }
  }
  return result;
};

// ---------------------------------------------------------------------

// test cases

// console.log(value1);
// console.log(value2);

// edge cases to include if non letter characters are to be removed
// const value3 = countLetters('1,2,3,4,5,mm,nn,p');
// const value4 = countLetters('AA,  Ggt &*, AAA');
// console.log(value3);
// console.log(value4);

// assertEqual test cases
const value1 = countLetters('hey my guy, whats shakin bacon?');
const value2 = countLetters('hhh jjj kkk ll m n');
assertEqual(value1['h'], 3);
assertEqual(value2['j'], 3);

// Test cases to be added is white space and non characters values are to be removed
// assertEqual(value3['p'], 1);
// assertEqual(value4['A'], 4);
