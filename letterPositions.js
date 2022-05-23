const assertArrayEquals = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }

  return console.log(`🟢🟢🟢 Asstertion Passed: ${array1} ===  ${array2}`);
};

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

const letterPositions = function(strPos) {
  if (typeof strPos !== 'string') {
    return console.log('Sorry your input is not a string');
  }
  const result = {};
  for (let i = 0; i < strPos.length; i++) {
    if (strPos[i] !== ' ') {
      result[strPos[i]] ? result[strPos[i]].push(i) : (result[strPos[i]] = [i]);
    }
  }
  return result;
};

// ---------------------------------------------------------------------
// Test cases
// console.log(letterPositions('aa bb cc'));
// console.log(letterPositions('hey friend hows life'));
assertArrayEquals(letterPositions('hey friend hows life').f, [4, 18]);
assertArrayEquals(letterPositions('aa bb cc').a, [0, 1]);
