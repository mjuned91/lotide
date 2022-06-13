const findKeyByValue = (object, value) => {
  let keyPack = Object.keys(object);
  for (let key of keyPack) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;