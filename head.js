const assertEqual = require('./assertEqual')

const head = function (array) {
  const value = array[0];
  if (value === undefined) {
    return;
  }

  return value;
};


module.exports = head

