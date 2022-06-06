const head = function(array) {
  const value = array[0];
  if (!value) {
    return undefined;
  }

  return value;
};


module.exports = head;

