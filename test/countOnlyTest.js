const { assert } = require("chai");
const countOnly = require("../countOnly");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {
  it("should return 1 for result1['Jason']", () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it("should return undefined for result1['Karima']", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });

  it("should return { Fang: 2, Jason: 1 }", () => {
    assert.deepEqual(result1, { Fang: 2, Jason: 1 });
  });
});