const countLetters = function(str) {
  if (typeof str !== 'string') {
    return console.log('Sorry your input is not a string');
  }

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

module.exports = countLetters;