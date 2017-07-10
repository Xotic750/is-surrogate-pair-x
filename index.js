/**
 * @file Tests if 2 characters together are a surrogate pair.
 * @version 1.4.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-surrogate-pair-x
 */

'use strict';

var isString = require('is-string');

/**
 * Tests if the two character arguments combined are a valid UTF-16
 * surrogate pair.
 *
 * @param {*} char1 - The first character of a suspected surrogate pair.
 * @param {*} char2 - The second character of a suspected surrogate pair.
 * @returns {boolean} Returns true if the two characters create a valid
 *  'UTF-16' surrogate pair; otherwise false.
 * @example
 * var isSurrogatePair = require('is-surrogate-pair-x');
 *
 * var test1 = 'a';
 * var test2 = '𠮟';
 *
 * isSurrogatePair(test1.charAt(0), test1.charAt(1)); // false
 * isSurrogatePair(test2.charAt(0), test2.charAt(1)); // true
 */
module.exports = function isSurrogatePair(char1, char2) {
  if (isString(char1) && char1.length === 1 && isString(char2) && char2.length === 1) {
    var code1 = char1.charCodeAt();
    if (code1 >= 0xD800 && code1 <= 0xDBFF) {
      var code2 = char2.charCodeAt();
      if (code2 >= 0xDC00 && code2 <= 0xDFFF) {
        return true;
      }
    }
  }

  return false;
};
