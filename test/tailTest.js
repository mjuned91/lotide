const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("should return 2 for result.length", () => {
    const result = ["Hello", "Lighthouse", "Labs"];
    assert.strictEqual(tail(result).length, 2);
  });

  it("should return 'Lighthouse' for result[0]", () => {
    const result = ["Hello", "Lighthouse", "Labs"];
    assert.strictEqual(tail(result)[0], "Lighthouse");
  });

  it("should return 'Labs' for result[1]", () => {
    const result = ["Hello", "Lighthouse", "Labs"];
    assert.strictEqual(tail(result)[1], "Labs");
  });

  it("should return ['Lighthouse', 'Labs'] for tail(words)", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
});