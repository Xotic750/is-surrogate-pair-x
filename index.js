/**
 * @file Tests if 2 characters together are a surrogate pair.
 * @version 2.0.0
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
 * @param {*} char1 - The character combination, or if `char2` is supplied then
 *  the first character of a suspected surrogate pair.
 * @param {*} [char2] - The second character of a suspected surrogate pair.
 * @returns {boolean} Returns true if the two characters create a valid
 *  'UTF-16' surrogate pair; otherwise false.
 * @example
 * var isSurrogatePair = require('is-surrogate-pair-x');
 *
 * var test1 = 'a';
 * var test2 = '𠮟';
 *
 * isSurrogatePair(test1); // false
 * isSurrogatePair(test1.charAt(0), test1.charAt(1)); // false
 * isSurrogatePair(test2); // true
 * isSurrogatePair(test2.charAt(0), test2.charAt(1)); // true
 */
module.exports = function isSurrogatePair(char1) {
  var argsLength = arguments.length;
  if (argsLength < 1) {
    return false;
  }

  var first;
  var second;
  if (argsLength === 1) {
    if (isString(char1) && char1.length === 2) {
      first = char1.charCodeAt(0);
      second = char1.charCodeAt(1);
    } else {
      return false;
    }
  } else if (argsLength > 1) {
    var char2 = arguments[1];
    if (isString(char1) === false || char1.length !== 1 || isString(char2) === false || char2.length !== 1) {
      return false;
    }

    first = char1.charCodeAt();
    second = char2.charCodeAt();
  }

  return first >= 0xD800 && first <= 0xDBFF && second >= 0xDC00 && second <= 0xDFFF;
};
