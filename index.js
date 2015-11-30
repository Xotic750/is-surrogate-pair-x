/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/is-surrogate-pair-x"
 * title="Travis status">
 * <img src="https://travis-ci.org/Xotic750/is-surrogate-pair-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/is-surrogate-pair-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/is-surrogate-pair-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a href="https://david-dm.org/Xotic750/is-surrogate-pair-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/is-surrogate-pair-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/is-surrogate-pair-x" title="npm version">
 * <img src="https://badge.fury.io/js/is-surrogate-pair-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * isSurrogatePair module. Determine if two characters make a surrogate pair.
 * @version 1.0.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-surrogate-pair-x
 */

/*jslint maxlen:80, es6:false, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:false, plusplus:true, maxparams:2, maxdepth:3,
  maxstatements:8, maxcomplexity:4 */

/*global module */

;(function () {
  'use strict';

  var ES = require('es-abstract/es6'),
    pCharCodeAt = String.prototype.charCodeAt;

  /**
   * Tests if the two character arguments combined are a valid UTF-16
   * surrogate pair.
   *
   * @param {*} char1 The first character of a suspected surrogate pair.
   * @param {*} char2 The second character of a suspected surrogate pair.
   * @return {boolean} Returns true if the two characters create a valid
   *  UTF-16 surrogate pair; otherwise false.
   * @example
   * var isSurrogatePair = require('is-surrogate-pair-x');
   * var test1 = 'a';
   * var test2 = '𠮟';
   *
   * isSurrogatePair(test1.charAt(0), test1.charAt(1)); // false
   * isSurrogatePair(test2.charAt(0), test2.charAt(1)); // true
   */
  module.exports = function isSurrogatePair(char1, char2) {
    var code1, code2;
    if (typeof char1 === 'string' && typeof char2 === 'string') {
      code1 = ES.Call(pCharCodeAt, char1);
      if (code1 >= 0xD800 && code1 <= 0xDBFF) {
        code2 = ES.Call(pCharCodeAt, char2);
        if (code2 >= 0xDC00 && code2 <= 0xDFFF) {
          return true;
        }
      }
    }
    return false;
  };
}());
