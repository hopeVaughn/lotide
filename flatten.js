const flatten = function(array) {

  const result = [];
  for (let i = 0; i < array.length; ++i) {
    let value = array[i];
    if (Array.isArray(value)) {
      for (let j = 0; j < value.length; ++j) {
        result.push(value[j]);
      }
    } else {
      result.push(value);
    }
  }
  return result;
};

module.exports = flatten;
