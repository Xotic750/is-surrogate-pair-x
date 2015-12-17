/*jslint maxlen:80, es6:false, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:false, plusplus:true, maxparams:1, maxdepth:2,
  maxstatements:11, maxcomplexity:3 */

/*global JSON:true, expect, module, require, describe, it, returnExports */

(function () {
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
          ],
          expected = values.map(function () {
            return false;
          }),
          actual = values.map(function (item) {
            return isSurrogatePair(item.charAt(0), item.charAt(1));
          });
      expect(actual).toEqual(expected);
    });
    it('should confirm that these are surrogate pairs', function () {
      var values = [
            '𠮟',
            '\uD87E\uDC04',
            String.fromCharCode(0xD800) + String.fromCharCode(0xDF81)
          ],
          expected = values.map(function () {
            return true;
          }),
          actual = values.map(function (item) {
            return isSurrogatePair(item.charAt(0), item.charAt(1));
          });
      expect(actual).toEqual(expected);
    });
  });
}());
