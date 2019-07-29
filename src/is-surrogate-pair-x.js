import isString from 'is-string';

const {charCodeAt} = '';

const checkPair1 = function checkPair1(char1) {
  return isString(char1) && char1.length === 2;
};

const checkPair2 = function checkPair2(char1, char2) {
  return isString(char1) && char1.length === 1 && isString(char2) && char2.length === 1;
};

const getPair1 = function getPair1(char1) {
  if (checkPair1(char1)) {
    return {
      first: charCodeAt.call(char1, 0),
      second: charCodeAt.call(char1, 1),
    };
  }

  return false;
};

const getPair2 = function getPair2(char1, char2) {
  if (checkPair2(char1, char2)) {
    return {
      first: charCodeAt.call(char1, 0),
      second: charCodeAt.call(char2, 0),
    };
  }

  return false;
};

const isPair = function isPair(result) {
  if (result === false) {
    return false;
  }

  const {first, second} = result;

  return first >= 0xd800 && first <= 0xdbff && second >= 0xdc00 && second <= 0xdfff;
};

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
const isSurrogatePair = function isSurrogatePair(char1, char2) {
  const argsLength = arguments.length;

  if (argsLength < 1) {
    return false;
  }

  let result;

  if (argsLength === 1) {
    result = getPair1(char1);
  } else if (argsLength > 1) {
    result = getPair2(char1, char2);
  }

  return isPair(result);
};

export default isSurrogatePair;
