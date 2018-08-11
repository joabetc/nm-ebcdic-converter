const map = new Map();
map.set('C6', 46);

module.exports = {
  toASCII: function(char) {
    return String.fromCharCode(parseInt(map.get(char), 16));
  }
}