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

module.exports = letterPositions;
