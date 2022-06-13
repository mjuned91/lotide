const findKey = (object, callback) => {
  //let keyPack = Object.keys(object);
  for(let key in object) {
    if (callback(object[key])) {
      return key;
      }
    }
    return undefined;
  /*
  for (let i = 0; i < keyPack.length; i++) {

    //console.log(keyPack[i]);
    //console.log(object[keyPack[i]]);
    //console.log(callback(object[keyPack[i]]));

    if (callback(object[keyPack[i]])) {
      return keyPack[i];
      }
    }
    return undefined;
    */
};

module.exports = findKey;