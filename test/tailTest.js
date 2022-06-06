const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2, 3, 4] from [1, 2, 3, 4])", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it("returns ['how', 'are', 'you'] from ['hello', 'how', 'are', 'you']", () => {
    assert.deepEqual(tail(['hello', 'how', 'are', 'you']), ['how', 'are', 'you']);
  });

  it("returns [] from [1]", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("returns [] from []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns ['there'] from ['hi', 'there']", () => {
    assert.deepEqual(tail(['hi', 'there']), ['there']);
  });

});

