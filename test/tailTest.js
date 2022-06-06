const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');


assertArraysEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
assertArraysEqual(tail(['hello', 'how', 'are', 'you']), ['how', 'are', 'you']);
assertArraysEqual(tail([1]), [1]);
assertArraysEqual(tail(['hi', 'there']), []);