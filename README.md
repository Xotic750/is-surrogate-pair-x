<a name="module_is-surrogate-pair-x"></a>
## is-surrogate-pair-x
<a href="https://travis-ci.org/Xotic750/is-surrogate-pair-x"
title="Travis status">
<img src="https://travis-ci.org/Xotic750/is-surrogate-pair-x.svg?branch=master"
alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/is-surrogate-pair-x"
title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-surrogate-pair-x.svg"
alt="Dependency status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/is-surrogate-pair-x#info=devDependencies"
title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-surrogate-pair-x/dev-status.svg"
alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/is-surrogate-pair-x" title="npm version">
<img src="https://badge.fury.io/js/is-surrogate-pair-x.svg"
alt="npm version" height="18">
</a>

isSurrogatePair module.

**Version**: 1.0.0  
**Author:** Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  
<a name="exp_module_is-surrogate-pair-x--module.exports"></a>
### `module.exports(char1, char2)` ⇒ <code>boolean</code> ⏏
Tests if the two character arguments combined are a valid UTF-16
surrogate pair.

**Kind**: Exported function  
**Returns**: <code>boolean</code> - Returns true if the two characters create a valid
 UTF-16 surrogate pair; otherwise false.  
**Example**  
```js
var isSurrogatePair = require('is-surrogate-pair-x);
var test1 = 'a';
var test2 = '𠮟';

isSurrogatePair(test1.charAt(0), test1.charAt(1)); // false
isSurrogatePair(test2.charAt(0), test2.charAt(1)); // true
```
