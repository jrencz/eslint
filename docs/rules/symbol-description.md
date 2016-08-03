# Require/Disallow Symbol Description (symbol-description)

The `Symbol` function may have optional description:

```js
var foo = Symbol("foo");

var someString = 'bar';
var bar = Symbol(someString);
```


Using `description` promotes easier debugging: when a symbol is logged the description is used:

```js
var foo = Symbol("foo");

> console.log(foo);
// Symbol(foo)
```

It may facilitate identifying symbols when one is observed during debugging.


## Rule Details

This rule allows enforcing or disallowing symbol descriptions.


## Examples

Examples of **incorrect** code for this rule:

```js
/*eslint symbol-description: "error"*/
/*eslint-env es6*/

var foo = Symbol();
```

Examples of **correct** code for this rule:

```js
/*eslint symbol-description: "error"*/
/*eslint-env es6*/

var foo = Symbol('foo');

var someString = 'bar';
var bar = Symbol(someString);
```


## When Not To Use It

This rule should not be used in ES3/5 environments.
In addition, this rule can be safely turned off if you don't want to enforce either presence or omission of `description` when creating Symbols.

## Further Reading

* [Symbol Objects specification: Symbol description](http://www.ecma-international.org/ecma-262/6.0/#sec-symbol-description)
