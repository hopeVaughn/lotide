const middle = function(array) {
  const empty = [];

  if (array.length <= 2) {
    return empty;
  }
  array.length % 2 !== 0
    ? empty.push(array[Math.floor(array.length / 2)])
    : empty.push(array[Math.floor((array.length - 1) / 2)]) +
    empty.push(array[Math.floor(array.length / 2)]);

  return empty;
};

module.exports = middle;
