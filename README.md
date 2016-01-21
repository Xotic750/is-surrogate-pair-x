<a name="module_is-surrogate-pair-x"></a>
## is-surrogate-pair-x
<a href="https://travis-ci.org/Xotic750/is-surrogate-pair-x"
title="Travis status">
<img
src="https://travis-ci.org/Xotic750/is-surrogate-pair-x.svg?branch=master"
alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/is-surrogate-pair-x"
title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-surrogate-pair-x.svg"
alt="Dependency status" height="18"/>
</a>
<a
href="https://david-dm.org/Xotic750/is-surrogate-pair-x#info=devDependencies"
title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-surrogate-pair-x/dev-status.svg"
alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/is-surrogate-pair-x" title="npm version">
<img src="https://badge.fury.io/js/is-surrogate-pair-x.svg"
alt="npm version" height="18">
</a>

isSurrogatePair module. Determine if two characters make a surrogate pair.

<h2>ECMAScript compatibility shims for legacy JavaScript engines</h2>
`es5-shim.js` monkey-patches a JavaScript context to contain all EcmaScript 5
methods that can be faithfully emulated with a legacy JavaScript engine.

`es5-sham.js` monkey-patches other ES5 methods as closely as possible.
For these methods, as closely as possible to ES5 is not very close.
Many of these shams are intended only to allow code to be written to ES5
without causing run-time errors in older engines. In many cases,
this means that these shams cause many ES5 methods to silently fail.
Decide carefully whether this is what you want. Note: es5-sham.js requires
es5-shim.js to be able to work properly.

`json3.js` monkey-patches the EcmaScript 5 JSON implimentation faithfully.

`es6.shim.js` provides compatibility shims so that legacy JavaScript engines
behave as closely as possible to ECMAScript 6 (Harmony).

**Version**: 1.0.7  
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

| Param | Type | Description |
| --- | --- | --- |
| char1 | <code>\*</code> | The first character of a suspected surrogate pair. |
| char2 | <code>\*</code> | The second character of a suspected surrogate pair. |

**Example**  
```js
var isSurrogatePair = require('is-surrogate-pair-x');
var test1 = 'a';
var test2 = '𠮟';

isSurrogatePair(test1.charAt(0), test1.charAt(1)); // false
isSurrogatePair(test2.charAt(0), test2.charAt(1)); // true
```
