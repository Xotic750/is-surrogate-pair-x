<a
  href="https://travis-ci.org/Xotic750/is-surrogate-pair-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/is-surrogate-pair-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/is-surrogate-pair-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-surrogate-pair-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/is-surrogate-pair-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-surrogate-pair-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/is-surrogate-pair-x"
  title="npm version">
<img src="https://badge.fury.io/js/is-surrogate-pair-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/is-surrogate-pair-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/is-surrogate-pair-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/is-surrogate-pair-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/is-surrogate-pair-x?branch=master"
  alt="bettercodehub score" height="18">
</a>

<a name="module_is-surrogate-pair-x"></a>

## is-surrogate-pair-x

Tests if 2 characters together are a surrogate pair.

<a name="exp_module_is-surrogate-pair-x--module.exports"></a>

### `module.exports(char1, [char2])` ⇒ <code>boolean</code> ⏏

Tests if the two character arguments combined are a valid UTF-16
surrogate pair.

**Kind**: Exported function  
**Returns**: <code>boolean</code> - Returns true if the two characters create a valid
'UTF-16' surrogate pair; otherwise false.

| Param   | Type            | Description                                                                                                  |
| ------- | --------------- | ------------------------------------------------------------------------------------------------------------ |
| char1   | <code>\*</code> | The character combination, or if `char2` is supplied then the first character of a suspected surrogate pair. |
| [char2] | <code>\*</code> | The second character of a suspected surrogate pair.                                                          |

**Example**

```js
import isSurrogatePair from 'is-surrogate-pair-x';

const test1 = 'a';
const test2 = '𠮟';

console.log(isSurrogatePair(test1)); // false
console.log(isSurrogatePair(test1.charAt(0), test1.charAt(1))); // false
console.log(isSurrogatePair(test2)); // true
console.log(isSurrogatePair(test2.charAt(0), test2.charAt(1))); // true
```
