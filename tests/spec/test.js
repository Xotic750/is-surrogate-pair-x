'use strict';

var isSurrogatePair;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  isSurrogatePair = require('../../index.js');
} else {
  isSurrogatePair = returnExports;
}

describe('Basic tests', function () {
  it('should confirm that these are not surrogate pairs', function () {
    var values = [
      'a',
      '\uDC04\uD87E',
      String.fromCharCode(0xDF81) + String.fromCharCode(0xD800)
    ];

    var expected = values.map(function () {
      return false;
    });

    var actual1 = values.map(function (item) {
      return isSurrogatePair(item.charAt(0), item.charAt(1));
    });

    expect(actual1).toEqual(expected);

    var actual2 = values.map(function (item) {
      return isSurrogatePair(item);
    });

    expect(actual2).toEqual(expected);

    expect(isSurrogatePair('\uDC04')).toBe(false);
    expect(isSurrogatePair('\uDC04\uDC04')).toBe(false);
    expect(isSurrogatePair('\uD87E\uDC04', '\uDC04')).toBe(false);
    expect(isSurrogatePair('\uD87E\uDC04', '\uDC04\uDC04')).toBe(false);

  });

  it('should confirm that these are surrogate pairs', function () {
    var values = [
      '𠮟',
      '\uD87E\uDC04',
      String.fromCharCode(0xD800) + String.fromCharCode(0xDF81)
    ];

    var expected = values.map(function () {
      return true;
    });

    var actual1 = values.map(function (item) {
      return isSurrogatePair(item.charAt(0), item.charAt(1));
    });

    expect(actual1).toEqual(expected);

    var actual2 = values.map(function (item) {
      return isSurrogatePair(item);
    });

    expect(actual2).toEqual(expected);
  });
});
