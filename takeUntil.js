const takeUntil = (array, callback) => {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      return results;
    } else {
      results.push(array[i]);
    }
  }
  return results;
};

/*
const takeUntil = function(array, callback) {
  const results = [];
  for (const item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
  return results;
};
*/

module.exports = takeUntil;