const flatten = (arr) => {
  let flat = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flat.push(arr[i][j]);
      }
    } else {
      flat.push(arr[i]);
    }
  }
  return flat;
};

module.exports = flatten;