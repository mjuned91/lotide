const countLetters = (string) => {
  let counter = {};
  for (let letter of string) {
    if (letter !== " ") {
      if (counter[letter]) {
        counter[letter] += 1;
      } else {
        counter[letter] = 1;
      }
    } 
  }
  return counter;
};

module.exports = countLetters;
