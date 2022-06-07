const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let obj1 = Object.keys(object1);
  let obj2 = Object.keys(object2);

  if (obj1.length !== obj2.length) {
    return false;
  } else {
    for (let key of obj1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      } else {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
          return eqArrays(object1[key], object2[key]);
        } else if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
};

module.exports = eqObjects;