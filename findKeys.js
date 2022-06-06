const findKeys = function(obj, cb) {
  let empty = '';
  for (const ele in obj) {
    if (cb(obj[ele])) {
      empty = ele;
      return empty;
    }
  }
  return undefined;
};

module.exports = findKeys;
