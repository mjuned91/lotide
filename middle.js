const middle = (arr) => {
  let newArr = [];
  if (arr.length <= 2) {
    return newArr;
  } else if (arr.length % 2 === 0) {
    let i = (arr.length / 2) - 1;
    let j = (arr.length / 2);
    newArr = [arr[i], arr[j]];
    return newArr;
  } else {
    let i = ((arr.length - 1) / 2);
    newArr = [arr[i]];
    return newArr;
  }
};

module.exports = middle;
