const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  it("should return [ 'g', 'c', 't', 'm', 't' ] for (word => word[0])", () => {
    const words1 = ["ground", "control", "to", "major", "tom"];
    assert.deepEqual(map(words1, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });

  it("should return [ 'r', 'o', 'o', 'a', 'o' ] for (word => word[1])", () => {
    const words1 = ["ground", "control", "to", "major", "tom"];
    assert.deepEqual(map(words1, word => word[1]), [ 'r', 'o', 'o', 'a', 'o' ]);
  });

  it("should return [ 3, 4, 5, 6, 7 ] for (numbers, num => num + 2)", () => {
    const numbers = [1, 2, 3, 4, 5];
    assert.deepEqual(map(numbers, num => num + 2), [ 3, 4, 5, 6, 7 ]);
  });
});
