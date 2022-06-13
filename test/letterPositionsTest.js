const { assert } = require("chai");
const letterPositions = require("../letterPositions");

describe('#letterPositions', () => {
  it("should return [0] for results1['h']", () => {
    const results1 = letterPositions("hello");
    assert.deepEqual(results1['h'], [0]); 
  });

  it("should return [3, 5, 15, 18] for results2['h']", () => {
    const results2 = letterPositions("lighthouse in the house");
    assert.deepEqual(results2['h'], [3, 5, 15, 18]);
  });
});