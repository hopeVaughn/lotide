const takeUntil = function(array, callback) {
  const final = [];
  for (let arr of array) {
    if (!callback(arr)) {
      break;
    } else {
      final.push(arr);
    }
  }
  return final;
};

module.exports = takeUntil;
