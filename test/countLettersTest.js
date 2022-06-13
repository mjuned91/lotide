const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("should return { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } for 'lighthouse in the house'", () => {
    assert.deepEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
  });

  it("should return { s: 1, a: 1, m: 1, p:1, l:1, e:1 } for 'sample'", () => {
    assert.deepEqual(countLetters("sample"), { s: 1, a: 1, m: 1, p:1, l:1, e:1 });
  });
});