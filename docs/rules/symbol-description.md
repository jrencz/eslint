# Require/Disallow Symbol Description (symbol-description)

The `Symbol` constructor may have optional description:

```js
var foo = Symbol("foo");

var someString = 'bar';
var bar = Symbol(someString);

```


Using `description` promotes easier debugging.

## Rule Details

This rule allows enforcing or disallowing symbol descriptions.


## Options

There are two options for this rule:

* `"always"` enforces providing a description (default)
* `"never"` disallows providing the description


## Examples

Examples of **incorrect** code for this rule:

```js
/*eslint symbol-description: ["error"]*/
/*eslint-env es6*/

var foo = Symbol();
```


```js
/*eslint symbol-description: ["error", "always"]*/
/*eslint-env es6*/

var foo = Symbol();
```

```js
/*eslint symbol-description: ["error", "never"]*/
/*eslint-env es6*/

var foo = Symbol('foo');

var someString = 'bar';
var bar = Symbol(someString);
```

Examples of **correct** code for this rule:

```js
/*eslint symbol-description: "error"*/
/*eslint-env es6*/

var foo = Symbol('foo');

var someString = 'bar';
var bar = Symbol(someString);
```

```js
/*eslint symbol-description: ["error", "never"]*/
/*eslint-env es6*/

var foo = Symbol();
```

```js
/*eslint symbol-description: ["error", "always"]*/
/*eslint-env es6*/

var foo = Symbol('foo');

var someString = 'bar';
var bar = Symbol(someString);
```


## When Not To Use It

This rule should not be used in ES3/5 environments and in case you don't want to enforce either presence or omission of `description`.

## Further Reading

* [Symbol Objects specification: Symbol description](http://www.ecma-international.org/ecma-262/6.0/#sec-symbol-description)
