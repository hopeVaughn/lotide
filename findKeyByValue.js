const findKeyByValue = function(object, value) {

  let result = '';
  for (let key in object) {
    if (value === object[key]) {
      result = key;
    }
  }
  return result;
};

module.exports = findKeyByValue;
