const map = new Map();
map.set('C6', 46);

class EBCDIC {
  toASCII(char) {
    if (char.length > 2) {
      throw new Error('Invalid char sequence size');
    }
    return this.getCharFromHex(map.get(char));
  }
  fromASCII(char) {
    if (char.length > 1) {
      throw new Error('Invalid char sequence size');
    }
    let ret;
    map.forEach((value, key, map) => {
      if (this.getCharFromHex(value) === char)
      ret = key;
    });
    return ret;
  }
  getCharFromHex(hex) {
    return String.fromCharCode(parseInt(hex, 16));
  }
}

module.exports = new EBCDIC();