'use strict';

const fp = require('../lib/fp.js');
const expect = require('chai').expect;

describe('Fp', function() {
  describe('#map', function() {
    it('should return [2,4,6,8] and be a function', function() {
      var result = fp.map([1,2,3,4], function(n){return n*2;});
      expect(result).to.deep.equal([ 2, 4, 6, 8 ]);
      expect(fp.map).to.be.a('function');
    });
  });
  describe('#filter', function() {
    it('should return [1,2,4] and be a function', function() {
      var result = fp.filter([1,2,3,4], function(n){return n !== 3;});
      expect(result).to.deep.equal([ 1, 2, 4 ]);
      expect(fp.filter).to.be.a('function');
    });
  });
  describe('#concat', function() {
    it('should return [1,2,3,4,5,6] and be a function', function() {
      var result = fp.concat([1,2,3], [4,5,6]);
      expect(result).to.deep.equal([ 1, 2, 3, 4, 5, 6 ]);
      expect(fp.concat).to.be.a('function');
    });
  });
  describe('#reduce', function() {
    it('should return 10 and be a function', function() {
      var result = fp.reduce([1,2,3,4], function(sum, value) {return(sum + value);}, 0);
      expect(result).to.equal(10);
      expect(fp.reduce).to.be.a('function');
    });
  });
  describe('#splice', function() {
    it('should return [6] and be a function', function() {
      var result = fp.splice([1,2,3,6,5], 3, 1, 4);
      expect(result).to.deep.equal([6]);
      expect(fp.splice).to.be.a('function');
    });
  });
});
