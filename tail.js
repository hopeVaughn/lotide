const tail = function(array) {
  if (array === undefined) {
    return;
  }
  if (array.length === 0) {
    return [];
  }

  return array.slice(1);
};


module.exports = tail;
