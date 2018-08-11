const map = new Map();
map.set('C6', 46);

module.exports = {
  toASCII: function(char) {
    return String.fromCharCode(parseInt(map.get(char), 16));
  },
  fromASCII: function(char) {
    let ret;
    map.forEach((value, key, map) => {
      if (String.fromCharCode(parseInt(value, 16)) === char)
        ret = key;
    });
    return ret;
  },
  getCharFromHex: function(hex) {
    return String.fromCharCode(parseInt(hex, 16));
  }
}