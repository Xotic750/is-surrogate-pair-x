import isString from 'is-string';
var _ref = '',
    charCodeAt = _ref.charCodeAt;
/**
 * Tests if the two character arguments combined are a valid UTF-16
 * surrogate pair.
 *
 * @param {*} char1 - The character combination, or if `char2` is supplied then
 *  the first character of a suspected surrogate pair.
 * @param {*} [char2] - The second character of a suspected surrogate pair.
 * @returns {boolean} Returns true if the two characters create a valid
 *  'UTF-16' surrogate pair; otherwise false.
 */

export default function isSurrogatePair(char1, char2) {
  var argsLength = arguments.length;

  if (argsLength < 1) {
    return false;
  }

  var first;
  var second;

  if (argsLength === 1) {
    if (isString(char1) && char1.length === 2) {
      first = charCodeAt.call(char1, 0);
      second = charCodeAt.call(char1, 1);
    } else {
      return false;
    }
  } else if (argsLength > 1) {
    if (isString(char1) === false || char1.length !== 1 || isString(char2) === false || char2.length !== 1) {
      return false;
    }

    first = charCodeAt.call(char1, 0);
    second = charCodeAt.call(char2, 0);
  }

  return first >= 0xd800 && first <= 0xdbff && second >= 0xdc00 && second <= 0xdfff;
}

//# sourceMappingURL=is-surrogate-pair-x.esm.js.map