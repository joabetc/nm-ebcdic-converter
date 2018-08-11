var ebcdic = require('../src/ebcdic.js')
var assert = require('assert');

describe('ebcdic', function() {

  context('when converting to ASCII', function() {
    it('should return F for C6', function() {
      assert.equal(ebcdic.toASCII('C6'), 'F');
    });
  });

  context('when converting from ASCII', function() {
    it('should return C6 for F', function() {
      assert.equal(ebcdic.fromASCII('F'), 'C6');
    });
  });
});