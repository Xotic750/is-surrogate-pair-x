import isSurrogatePair from '../src/is-surrogate-pair-x';

describe('basic tests', function() {
  it('should confirm that these are not surrogate pairs', function() {
    expect.assertions(6);
    const values = ['a', '\uDC04\uD87E', String.fromCharCode(0xdf81) + String.fromCharCode(0xd800)];

    const expected = values.map(function() {
      return false;
    });

    const actual1 = values.map(function(item) {
      return isSurrogatePair(item.charAt(0), item.charAt(1));
    });

    expect(actual1).toStrictEqual(expected);

    const actual2 = values.map(function(item) {
      return isSurrogatePair(item);
    });

    expect(actual2).toStrictEqual(expected);

    expect(isSurrogatePair('\uDC04')).toBe(false);
    expect(isSurrogatePair('\uDC04\uDC04')).toBe(false);
    expect(isSurrogatePair('\uD87E\uDC04', '\uDC04')).toBe(false);
    expect(isSurrogatePair('\uD87E\uDC04', '\uDC04\uDC04')).toBe(false);
  });

  it('should confirm that these are surrogate pairs', function() {
    expect.assertions(2);
    const values = ['𠮟', '\uD87E\uDC04', String.fromCharCode(0xd800) + String.fromCharCode(0xdf81)];

    const expected = values.map(function() {
      return true;
    });

    const actual1 = values.map(function(item) {
      return isSurrogatePair(item.charAt(0), item.charAt(1));
    });

    expect(actual1).toStrictEqual(expected);

    const actual2 = values.map(function(item) {
      return isSurrogatePair(item);
    });

    expect(actual2).toStrictEqual(expected);
  });
});
