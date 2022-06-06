const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns ['middle'] from ['item','item','item','item','middle','item','item','item','item'] ", () => {
    assert.deepEqual(middle([
      'item',
      'item',
      'item',
      'item',
      'middle',
      'item',
      'item',
      'item',
      'item'
    ]), ['middle']);
  });

  it("returns ['middle','middle'] from ['item','item','item','item','middle','middle', 'item','item','item'item',] ", () => {
    assert.deepEqual(middle([
      'item',
      'item',
      'item',
      'item',
      'middle',
      'middle',
      'item',
      'item',
      'item',
      'item',
    ]), ['middle', 'middle']);
  });

  it("returns [3] from [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [5,6] from [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);
  });

});

