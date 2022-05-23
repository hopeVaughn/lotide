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

  const splitStr = str.replace(/[^a-zA-Z]/gi, '').split('');
  result = {};

  for (const ele of splitStr) {
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

const value1 = countLetters('hey my guy, whats shakin bacon?');
const value2 = countLetters('hhh jjj kkk ll m n');
const value3 = countLetters('1,2,3,4,5,mm,nn,p');
const value4 = countLetters('AA,  Ggt &*, AAA');
// console.log(value1);
assertEqual(value1['h'], 3);
assertEqual(value2['j'], 3);
assertEqual(value3['p'], 1);
assertEqual(value4['A'], 4);
