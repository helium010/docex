[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web)

[MDN Tutorials](https://developer.mozilla.org/en-US/docs/Web/Tutorials)

[MDN Developer guides](https://developer.mozilla.org/en-US/docs/Web/Guide)

[Github: frontend-dev-bookmarks](https://github.com/dypsilon/frontend-dev-bookmarks)

[Github: frontend-stuff](https://github.com/moklick/frontend-stuff)

[Github: design-resources-for-developers](https://github.com/bradtraversy/design-resources-for-developers)

[Deno](https://deno.land/)

# HTML

[MDN: HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)

[HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

[HTML attribute reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)

## SVG

[MDN: SVG](https://developer.mozilla.org/en-US/docs/Web/SVG)

[MDN: SVG Tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)

```html
<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="red" />
  <circle cx="150" cy="100" r="80" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
  <path d="M10 10"/>
</svg>
```

### Paths

The `d` attribute defines a path to be drawn.

SVG defines 6 types of path commands, for a total of 20 commands:

-   MoveTo: `M`, `m`
-   LineTo: `L`, `l`, `H`, `h`, `V`, `v`
-   Cubic Bézier Curve: `C`, `c`, `S`, `s`
-   Quadratic Bézier Curve: `Q`, `q`, `T`, `t`
-   Elliptical Arc Curve: `A`, `a`
-   ClosePath: `Z`, `z`

| Command | Parameter   | Notes                          |
| ------- | ----------- | ------------------------------ |
| `M`     | $(x,y)^+$   | Move to $x$, $y$.              |
| `m`     | $(dx,dy)^+$ |
| `L`     | $(x,y)^+$   | Draw a line to $x$, $y$.       |
| `l`     | $(dx,dy)^+$ |
| `H`     | $x^+$       | Draw a horizontal line to $x$. |
| `h`     | $dx^+$      |
| `V`     | $y^+$       | Draw a vertical line to $y$.   |
| `v`     | $dy^+$      |

### Basic shapes

-   `<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>`
-   `<circle cx="25" cy="75" r="20"/>`
-   `<ellipse cx="75" cy="75" rx="20" ry="5"/>`
-   `<line x1="10" x2="50" y1="110" y2="150" stroke="black" stroke-width="5"/>`
-   `<polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145" stroke="orange" fill="transparent" stroke-width="5"/>`

### Texts

```html
<text x="10" y="10">Hello World!</text>
```

Attributes

-   `x` `y` The x/y coordinate of the starting point of the text baseline.
-   `dx` `dy` Shifts the text position horizontally/vertically from a previous text element.
-   `rotate` Rotates orientation of each individual glyph.
-   `lengthAdjust` How the text is stretched or compressed to fit the width defined by the `textLength` attribute. Value type: `spacing`|`spacingAndGlyphs`.
-   `textLength` A width that the text should be scaled to fit.

-   `dominant-baseline` specifies the baseline used to align the box’s text and inline-level contents. Value type: `auto` | `text-bottom` | `alphabetic` | `ideographic` | `middle` | `central` | `mathematical` | `hanging` | `text-top`
-   `text-anchor` is used to align (start-, middle- or end-alignment) a string of pre-formatted text or auto-wrapped text where the wrapping area is determined from the `inline-size` property relative to a given point. Value type: `start` | `middle` | `end`

### Basic Transformations

-   `<g> ... </g>` Create a group of elements.
-   `<g transform="${args}"> ...` where `${args}` can be a space-dividing sequence of
    -   `translate(x,y)`
    -   `rotate(angle)` The center of rotation can be changed by `transform-origin="x y"`

### Miscellaneous

#### Make an svg scale with its parent container

```html
<svg width="100%" height="50px" viewBox="0 0 20 10" preserveAspectRatio="none">
    <polygon fill=red stroke-width=0
             points="0,10 20,10 10,0" />
</svg>
```

The attribute `width` and `height` can be overridden by css properties `width` and `height`.

## MathML

[MDN: MathML](https://developer.mozilla.org/en-US/docs/Web/MathML)

In MathML there are two ways to mark up mathematics:

-   **Presentation MathML** is used to control the layout of equations.
-   **Content MathML** is designed to encode the semantic mathematical meaning and to make expressions understandable to computer algebra systems.

[MathML element reference](https://developer.mozilla.org/en-US/docs/Web/MathML/Element)

`<math>` the top-level element. Every valid MathML instance must be wrapped in `<math>` tags.

`<mi>` an **identifier** such as function names, variables or symbolic constants.

`<mrow>` group sub-expressions, which usually contain one or more operators with their respective operands (such as `<mi>` and `<mn>`).

`<mo>` an operator in a broad sense. Besides operators in strict mathematical meaning, this element also includes "operators" like parentheses, separators like comma and semicolon, or "absolute value" bars.

`<annotation>` the container element containing semantic information in a non-XML format.

`<semantics>` a container element associating annotations and must have child elements

# CSS

Refer to [css.md](css.md)

# JavaScript

[MDN](https://developer.mozilla.org/en-US/docs/Web/javascript)

**[JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)**

[JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

[Can I Use](https://caniuse.com/) Browsers supporting query.

[JavaScript Module Systems Showdown: CommonJS vs AMD vs ES2015](https://auth0.com/blog/javascript-module-systems-showdown/)

[ECMAScript® Language Specification](https://tc39.es/ecma262/#sec-ecmascript-language-statements-and-declarations)

[ES6 In Depth: Symbols](https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/)

## Features

### String

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

`String`

-   `indexOf(searchValue [, fromIndex])` returns the index within the calling `String` object of the first occurrence of the specified value, starting the search at `fromIndex`. \
     Returns `-1` if the value is not found. \
     An empty string `searchValue` produces strange results. ( Do NOT use this function with empty search string )

-   `match(regexp)` returns an `Array` whose contents depend on the presence or absence of the global (g) flag, or null if no matches are found.
    -   If the `g` flag is used, all results matching the complete regular expression will be returned, but capturing groups will not.
    -   if the `g` flag is not used, return the same result as [RegExp.exec()](<#RegExp.exec()>).
-   `matchAll(regexp)` returns an iterator of matches. Each match is same as the result of [RegExp.exec()](<#RegExp.exec()>).
-   `search(regexp)` returns the index of the first match or `-1` if no match was found.

-   `padStart(targetLength [, padString])` \
     `padEnd(targetLength [, padString])` \
     pads the current string from the start/end with a given string and returns a new string of the length `targetLength`.
-   `repeat(count)` returns a string consisting of the elements of the object repeated count times.

-   `localeCompare(compareString, locales?, options?)` \
     `locales` A string with a BCP 47 language tag, or an array of such strings. \
     `options` is an object whose fields can be
    -   `sensitivity` Possible values are:
        -   `"base"` `a ≠ b`, `a = á`, `a = A`.
        -   `"accent"` `a ≠ b`, `a ≠ á`, `a = A`.
        -   `"case"` `a ≠ b`, `a = á`, `a ≠ A`.
        -   `"variant"` `a ≠ b`, `a ≠ á`, `a ≠ A`.
    -   `caseFirst` Possible values are:
        -   `"upper"`
        -   `"lower"`
        -   `"false"`

### Collections

[JavaScript Guide > Indexed collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections)

`Array`

-   `splice(index, count_to_remove, addElement1, addElement2, ...)` removes elements from an array and (optionally) replaces them.
-   `shift()` removes the first element from an array and returns that element.
-   `unshift()` adds one or more elements to the front of an array and returns the new length of the array.
-   `pop()` removes the last element from an array and returns that element.
-   `push()` adds one or more elements to the end of an array and returns the resulting length of the array.
-   `filter(callback[, thisObject])` returns a new array containing the items for which callback returned true.

[JavaScript Guide > Keyed collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections)

`Map`

-   `constructor` \
     `constructor(iterable)`
-   `size`
-   `clear()`
-   `delete(key)` Returns `true` if an element in the Map object existed and has been removed, else return `false`
-   `get(key)` Returns the value associated to the `key`, or `undefined` if there is none.
-   `has(key)`
-   `set(key, value)`
-   `keys()`
-   `values()`
-   `entries()` Returns a new Iterator object that contains an array of `[key, value]` for each element in the Map object in insertion order.

`Set`

-   `constructor` \
     `constructor(iterable)`
-   `size`
-   `clear()`
-   `delete(value)` Returns a boolean asserting whether an element was successfully removed or not.
-   `has(value)`

### Function

[Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

### Object

Static methods

-   `Object.assign(target, ...sources)` \
     copies all enumerable own properties from one or more source objects to a target object.

-   `Object.freeze(obj)` \
     freezes an object. A frozen object can no longer be changed
-   `Object.seal(obj)` \
     seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable.
-   `Object.keys()` \
     `Object.values()` \
     returns an array of a given object's own enumerable property names/values.

Instance methods

-   `hasOwnProperty(prop)` \
     returns `true` if the specified property is a direct property of the object — even if the value is `null` or `undefined`.

Operators

-   `in` \
     `prop in object` \
     returns `true` if the specified property is in the specified object or its prototype chain.
-   `instanceof` \
     `object instanceof constructor` \
     tests to see if the `prototype` property of a constructor appears anywhere in the prototype chain of an object.

### Class

[JavaScript Reference > Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100

```

### Promise

[Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

A promise comes with some guarantees:

-   Callbacks added with `then()` will never be invoked before the [completion of the current run](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#run-to-completion) of the JavaScript event loop.
-   These callbacks will be invoked even if they were added after the success or failure of the asynchronous operation that the promise represents.
-   Multiple callbacks may be added by calling `then()` several times. They will be invoked one after another, in the order in which they were inserted.

### Regular Expressions

[Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

```js
let re = /ab+c/;
```

-   `exec(str)` executes a search for a match in a string and returns an array of information or `null` on a mismatch.
-   `test(str)` tests for a match in a string and returns `true` or `false`.

<div id="RegExp.exec()">

Result of `RegExp.exec()`

</div>

| Property/Index | Description                                             |
| -------------- | ------------------------------------------------------- |
| `[0]`          | The full string of characters matched.                  |
| `[1], ...[n]`  | The parenthesized substring matches, if any.            |
| `index`        | The 0-based index of the match in the string.           |
| `indices`      | An array where each entry represents a substring match. |
| `input`        | The original string that was matched against.           |

Flags:

-   `g` global match.
-   `s` let `.` match newlines.
-   `d` generate an `indices` property.
-   `i` ignore case.
-   `m` search across multiple lines.
-   `y` match only from the index indicated by the `lastIndex` property.
-   `u` treat the pattern as a sequence of Unicode code points.

### JSON

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

`toJSON()` behavior

`JSON.stringify()` calls `toJSON` with one parameter:

-   If this object is a property value, the property name
-   If it is in an array, the index in the array, as a string
-   An empty string if JSON.stringify() was directly called on this object

### Inheritance and the prototype chain

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

Each object has a private property which holds a link to another object called its **prototype**. That prototype object has a prototype of its own, and so on until an object is reached with `null` as its prototype. By definition, `null` has no prototype, and acts as the final link in this **prototype chain**.

Nearly all objects in JavaScript are instances of `Object` which sits just below `null` on the top of a prototype chain.

JavaScript objects are dynamic "bags" of properties (referred to as **own properties**)

When an inherited function is executed, the value of `this` points to the inheriting object, not to the prototype object where the function is an own property.

All functions have a special property named `prototype`.

By default, the `__proto__` of any function's prototype property is `window.Object.prototype`.

**Different ways to create objects and the resulting prototype chain**

Objects created with syntax constructs

```js
var o = {a: 1};

// The newly created object o has Object.prototype as its [[Prototype]]
// o has no own property named 'hasOwnProperty'
// hasOwnProperty is an own property of Object.prototype.
// So o inherits hasOwnProperty from Object.prototype
// Object.prototype has null as its prototype.
// o ---> Object.prototype ---> null

var b = ['yo', 'whadup', '?'];

// Arrays inherit from Array.prototype
// (which has methods indexOf, forEach, etc.)
// The prototype chain looks like:
// b ---> Array.prototype ---> Object.prototype ---> null

function f() {
  return 2;
}

// Functions inherit from Function.prototype
// (which has methods call, bind, etc.)
// f ---> Function.prototype ---> Object.prototype ---> null
```

With a constructor

A constructor in JavaScript is just a function that happens to be called with the `new` operator.

```js
function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype.addVertex = function(v) {
  this.vertices.push(v);
}

var g = new Graph();
// g is an object with own properties 'vertices' and 'edges'.
// g.[[Prototype]] is the value of Graph.prototype when new Graph() is executed.
```

With `Object.create`

```js
var a = {a: 1};
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (inherited)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty);
// undefined, because d doesn't inherit from Object.prototype
```

`delete` Operator with `Object.create` and `new` operator

```js
var a = {a: 1};

var b = Object.create(a);

console.log(a.a); // print 1
console.log(b.a); // print 1
b.a=5;
console.log(a.a); // print 1
console.log(b.a); // print 5
delete b.a;
console.log(a.a); // print 1
console.log(b.a); // print 1 (b.a value 5 is deleted but it showing value from its prototype chain)
delete a.a;       // This can also be done via 'delete Object.getPrototypeOf(b).a'
console.log(a.a); // print undefined
console.log(b.a); // print undefined

function Graph() {
  this.vertices = [4,4];
}

var g = new Graph();
console.log(g.vertices); // print [4,4]
console.log(g.__proto__.vertices) // print undefined
g.vertices = 25;
console.log(g.vertices); // print 25
delete g.vertices;
console.log(g.vertices); // print undefined
```

With the `class` keyword

```js
'use strict';

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

var square = new Square(2);
```

`hasOwnProperty` is the only thing in JavaScript which deals with properties and does not traverse the prototype chain.

**`prototype` and `Object.getPrototypeOf`**

## Standard built-in objects

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

The term "global objects" (or standard built-in objects) here is not to be confused with **the global object**. Here, "global objects" refer to **objects in the global scope**.

The **global object** itself can be accessed using the `this` operator in the global scope. In fact, the global scope **consists of** the properties of the global object, including inherited properties, if any.

# Typescript

[Official Documentation](https://www.typescriptlang.org/docs/home.html)

[Handbook](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)

```sh
npm install -g typescript
```

Test install by checking the version

```sh
tsc --version
```

## Handbook

[Handbook](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)

### Type Manipulation

[Handbook -> Creating Types from Types](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)

Keyof Type Operator

```ts
type Point = { x: number; y: number };
type P = keyof Point; // type P = “x” | “y”
```

Typeof Type Operator

```ts
// Prints "string"
console.log(typeof "Hello world");
```

Indexed Access Types

```ts
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"]; // type Age = number
```

Mapped Types

### Classes

Parameter Properties

```ts
class Params {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number
  ) {
    // No body necessary
  }
}
const a = new Params(1, 2, 3);
a.x; // (property) Params.x: number
```

## Reference

### Utility Types

[Reference](https://www.typescriptlang.org/docs/handbook/utility-types.html)

Change modifier of properties.

-   `Partial<Type>` Constructs a type with all properties of `Type` set to optional.
-   `Required<Type>` Constructs a type consisting of all properties of `Type` set to required.
-   `Readonly<Type>` Constructs a type with all properties of `Type` set to readonly, meaning the properties of the constructed type cannot be reassigned.

Add, remove or change properties.

-   `Record<Keys, Type>` Constructs an object type whose property keys are `Keys` and whose property values are `Type`.
-   `Pick<Type, Keys>` Constructs a type by picking the set of properties `Keys` (string literal or union of string literals) from `Type`.
-   `Omit<Type, Keys>` Constructs a type by picking all properties from `Type` and then removing `Keys` (string literal or union of string literals).

Add or remove types in union.

-   `Exclude<Type, ExcludedUnion>` Constructs a type by excluding from `Type` all union members that are assignable to `ExcludedUnion`.
-   `Extract<Type, Union>` Constructs a type by extracting from `Type` all union members that are assignable to `Union`.

Extract type from function.

-   `ReturnType<Type>` Constructs a type consisting of the return type of function `Type`.

### Decorators

[Reference](https://www.typescriptlang.org/docs/handbook/decorators.html)

To enable experimental support for decorators, you must enable the `experimentalDecorators` compiler option either on the command line or in your `tsconfig.json`

### Modules

[Reference](https://www.typescriptlang.org/docs/handbook/modules.html)

```ts
export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };
export { ZipCodeValidator as RegExpBasedZipCodeValidator } from "./ZipCodeValidator"; // Export original validator but rename it.
export * from "./StringValidator";  // Exports 'StringValidator' interface.
export * as utilities from "./utilities";

import { ZipCodeValidator } from "./ZipCodeValidator";
import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
import * as validator from "./ZipCodeValidator";
import "./my-module.js";

export default "123";
export default function (s: string) { }
import validate from "./StaticZipCodeValidator";

export = ZipCodeValidator;
import zip = require("./ZipCodeValidator");
```

Ambient Modules:

```ts
// In `.d.ts` files
declare module "*!text" {
  const content: string;
  export default content;
}
// Some do it the other way around.
declare module "json!*" {
  const value: any;
  export default value;
}

// In .ts files.
import fileContent from "./xyz.txt!text";
import data from "json!http://example.com/data.json";
console.log(data, fileContent);
```

Module Resolution Strategies

An import statement like `import { b } from "./moduleB"` in `/root/src/moduleA.ts` would result in attempting the following locations for locating "`./moduleB"`:

1. `/root/src/moduleB.ts`
1. `/root/src/moduleB.tsx`
1. `/root/src/moduleB.d.ts`
1. `/root/src/moduleB/package.json` (if it specifies a `types` property)
1. `/root/src/moduleB/index.ts`
1. `/root/src/moduleB/index.tsx`
1. `/root/src/moduleB/index.d.ts`

Similarly, a non-relative import will follow the Node.js resolution logic. `import { b } from "moduleB"` in source file `/root/src/moduleA.ts` would result in the following lookups:

1. `/root/src/node_modules/moduleB.ts`
1. `/root/src/node_modules/moduleB.tsx`
1. `/root/src/node_modules/moduleB.d.ts`
1. `/root/src/node_modules/moduleB/package.json` (if it specifies a types property)
1. `/root/src/node_modules/@types/moduleB.d.ts`
1. `/root/src/node_modules/moduleB/index.ts`
1. `/root/src/node_modules/moduleB/index.tsx`
1. `/root/src/node_modules/moduleB/index.d.ts`

<br>

9. `/root/node_modules/moduleB.ts`
10. `/root/node_modules/moduleB.tsx`
11. `/root/node_modules/moduleB.d.ts`
12. `/root/node_modules/moduleB/package.json` (if it specifies a types property)
13. `/root/node_modules/@types/moduleB.d.ts`
14. `/root/node_modules/moduleB/index.ts`
15. `/root/node_modules/moduleB/index.tsx`
16. `/root/node_modules/moduleB/index.d.ts`

<br>

17. `/node_modules/moduleB.ts`
18. `/node_modules/moduleB.tsx`
19. `/node_modules/moduleB.d.ts`
20. `/node_modules/moduleB/package.json` (if it specifies a types property)
21. `/node_modules/@types/moduleB.d.ts`
22. `/node_modules/moduleB/index.ts`
23. `/node_modules/moduleB/index.tsx`
24. `/node_modules/moduleB/index.d.ts`

### Triple-Slash Directives

[Reference](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html)

Triple-slash directives are **only** valid at the top of their containing file.

## What's New

[Reference](https://www.typescriptlang.org/docs/handbook/release-notes/overview.html)

### 2.8

#### Conditional Types

A conditional type selects one of two possible types based on a condition expressed as a type relationship test:

```ts
T extends U ? X : Y
```

The type above means when `T` is assignable to `U` the type is `X`, otherwise the type is `Y`.

#### Type inference in conditional types

Within the `extends` clause of a conditional type, it is now possible to have `infer` declarations that introduce a type variable to be inferred. Such inferred type variables may be referenced in the true branch of the conditional type. It is possible to have multiple `infer` locations for the same type variable.

### 2.3

#### Generic parameter defaults

A generic parameter default follows the following rules:

-   A type parameter is deemed optional if it has a default.
-   Required type parameters must not follow optional type parameters.
-   Default types for a type parameter must satisfy the constraint for the type parameter, if it exists.
-   When specifying type arguments, you are only required to specify type arguments for the required type parameters. Unspecified type parameters will resolve to their default types.
-   If a default type is specified and inference cannot choose a candidate, the default type is inferred.
-   A class or interface declaration that merges with an existing class or interface declaration may introduce a default for an existing type parameter.
-   A class or interface declaration that merges with an existing class or interface declaration may introduce a new type parameter as long as it specifies a default.

## Declaration Files

[Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)

## JavaScript

[Reference](https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html)

To enable typescript errors in JavaScript files, add: `// @ts-check` to the first line in `.js` files.

[JSDoc Reference](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)

-   `@type` You can reference types with the “@type” tag. The type can be:

    -   Primitive, like `string` or `number`.
    -   Declared in a TypeScript declaration, either global or imported.
    -   Declared in a JSDoc `@typedef` tag.
    -   Most JSDoc type syntax and any TypeScript syntax,

    **Casts**

    Adding a `@type` tag before any parenthesized expression to cast it.

    **Import types**

    You can import declarations from other files using import types. This syntax is TypeScript-specific and differs from the JSDoc standard:

    ```js
    // @filename: types.d.ts
    export type Pet = {
    name: string,
    };

    // @filename: main.js
    /**
    * @param { import("./types").Pet } p
    */
    function walk(p) {
    console.log(`Walking ${p.name}...`);
    }
    ```

    import types can be used in type alias declarations:

    ```js
    /**
     * @typedef { import("./types").Pet } Pet
     */

    /**
     * @type {Pet}
     */
    var myPet;
    myPet.name;
    ```

-   `@param` and `@returns`

    `@param` uses the same type syntax as `@type`, but adds a parameter name. The parameter may also be declared optional by surrounding the name with square brackets:

    ```js
    // Parameters may be declared in a variety of syntactic forms
    /**
     * @param {string}  p1 - A string param.
     * @param {string=} p2 - An optional param (Google Closure syntax)
     * @param {string} [p3] - Another optional param (JSDoc syntax).
     * @param {string} [p4="test"] - An optional param with a default value
     * @returns {string} This is the result
     */
    function stringsStringStrings(p1, p2, p3, p4) {
      // do something
    }
    ```

-   `@typedef`, `@callback`, and `@param`

    You can define complex types with `@typedef`. Similar syntax works with `@param`.

    ```js
    /**
     * @typedef {Object} SpecialType - creates a new type named 'SpecialType'
     * @property {string} prop1 - a string property of SpecialType
     * @property {number} prop2 - a number property of SpecialType
     * @property {number=} prop3 - an optional number property of SpecialType
     * @prop {number} [prop4] - an optional number property of SpecialType
     * @prop {number} [prop5=42] - an optional number property of SpecialType with default
     */

    /** @type {SpecialType} */
    var specialTypeObject;
    specialTypeObject.prop3;
    ```

    `@callback` is similar to `@typedef`, but it specifies a function type instead of an object type:

    ```js
    /**
     * @callback Predicate
     * @param {string} data
     * @param {number} [index]
     * @returns {boolean}
     */

    /** @type {Predicate} */
    const ok = (s) => !(s.length % 2);
    ```

-   `@template`

    You can declare type parameters with the `@template` tag. This lets you make functions, classes, or types that are generic:

    ```js
    /**
     * @template T
     * @param {T} x - A generic parameter that flows through to the return type
     * @returns {T}
     */
    function id(x) {
      return x;
    }

    const a = id("string");
    const b = id(123);
    const c = id({});
    ```

    Use comma or multiple tags to declare multiple type parameters:

    ```js
    /**
     * @template T,U,V
     * @template W,X
     */
    ```

-   `@readonly`

    The `@readonly` modifier ensures that a property is only ever written to during initialization.

## Config

-   `outDir` Files will be emitted into this directory. The directory structure of the original source files is preserved.
-   `module` Sets the module system for the program. You very likely want `"CommonJS"` for node projects.
-   `target` Changes which JS features are downleveled and which are left intact.

-   `strict` Enable all of the _strict mode family_ options.
-   `skipLibCheck` Skip type checking of declaration files.
-   `esModuleInterop`

-   `sourceMap` Generate [sourcemap files](https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Use_a_source_map).
-   `declaration` Generate `.d.ts` files for every TypeScript or JavaScript file inside your project.
-   `declarationMap` Generates a source map for `.d.ts` files which map back to the original `.ts` source file.

## Development

[Github: Typescript](https://github.com/microsoft/TypeScript)

[Github Wiki](https://github.com/microsoft/TypeScript/wiki)

-   [Using the Compiler API](https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API)

```sh
git clone https://github.com/microsoft/TypeScript.git
cd TypeScript
npm install -g gulp
npm ci
gulp local              # Build the compiler into built/local.
gulp build-eslint-rules # Compiles eslint rules to js
```

[Github: ts-ast-viewer](https://github.com/dsherret/ts-ast-viewer): TypeScript AST viewer.

[Debugging the TypeScript Codebase](https://blog.andrewbran.ch/debugging-the-type-script-codebase/)

[Github: typescript-notes](https://github.com/orta/typescript-notes)

### Architectural Overview

[Architectural Overview](https://github.com/microsoft/TypeScript/wiki/Architectural-Overview)

**Data Structures**:

-   **Node** \
     The basic building block of the Abstract Syntax Tree (AST). In general node represent non-terminals in the language grammar; some terminals are kept in the tree such as identifiers and literals.
-   **SourceFile** \
     The AST of a given source file. A SourceFile is itself a Node; it provides an additional set of interfaces to access the raw text of the file, references in the file, the list of identifiers in the file, and mapping from a position in the file to a line and character numbers.
-   **Program** \
     A collection of SourceFiles and a set of compilation options that represent a compilation unit. The program is the main entry point to the type system and code generation.
-   **Symbol** \
     A named declaration. Symbols are created as a result of binding. Symbols connect declaration nodes in the tree to other declarations contributing to the same entity. Symbols are the basic building block of the semantic system.
-   **Type** \
     Types are the other part of the semantic system. Types can be named (e.g. classes and interfaces), or anonymous (e.g. object types).
-   **Signature** \
     There are three types of signatures in the language: call, construct and index signatures.

### Note

> The following note comes from
>
> ```
> commit 663b19fe4a7c4d4ddaa61aedadd28da06acd27b6 (HEAD -> master, origin/master, origin/HEAD)
> Author: TypeScript Bot <typescriptbot@microsoft.com>
> Date:   Sat May 29 06:38:18 2021 +0000
> ```
>
> of https://github.com/microsoft/TypeScript .
>
> `{xx} > ... > {zz}:{number}` means `{number}`th line of `src/{xx}/.../{yy}`

#### Program

> In the following notes, `:{number}` means the `{number}`th line of `src/compiler/program.ts`.

`:787` `export function createProgram` \
Create a new 'Program' instance. \
A Program is an immutable collection of SourceFiles and a "CompilerOptions" that represent a compilation unit.\
Creating a program proceeds from a set of root files, expanding the set of inputs by following imports and triple-slash-reference-path directives transitively. "@types" and triple-slash-reference-types are also pulled in.

-   `:966` calls `processRootFile` for each root file name.
-   `:1129` returns Program.

> In the following notes, all functions and variables are defined in `createProgram` and act as fields of object Program.

`:2521` `function findSourceFileWorker`

-   `:2610` calls `host.getSourceFile` which indirectly calls `parser.ts` > `createSourceFile` and save SourceFile as local variable `file`.
    -   `828:` `const host = createProgramOptions.host || createCompilerHost(options);` creates host and save as local variable `host`.
-   `:2680` returns SourceFile `file`.

`:2246` `function getGlobalDiagnostics`

-   `:2247` calls `getDiagnosticsProducingTypeChecker`
    -   `:1742` calls `compiler > checker.ts:296` `createTypeChecker` with `program`.

#### Parser, Scanner and related

> In the following notes, `:{number}` means the `{number}`th line of `src/compiler/parser.ts`.

`:76` `export function forEachChild` \
Invokes a callback for each child of the given node. If a callback returns a truthy value, iteration stops and that value is returned.

`:630` `export function createSourceFile`

`:706` `ts > Parser` \
Namespace `Parser` implements the parser as a singleton module. This namespace acts like a object, where private fields are local variables in namespace and public fields are exported local variables.

> In the following notes, functions and variables are defined at `src/compiler/parser.ts:706` > `Parser > ` unless specified.

`:839` `export function parseSourceFile` \
Parsing starts.

-   `:853` calls `initializeState`.
-   `:855` calls `parseSourceFileWorker` to create SourceFile.
-   `:857` calls `clearState`
-   `:859` returns SourceFile.

`:962` `function initializeState`

-   `:969` Parser fields like `fileName`, `parseDiagnostics` and `identifiers` are initialized.
-   `:1000` Scanner is initialized.

`:1027` `function parseSourceFileWorker`

-   `:1038` calls `const statements = parseList(ParsingContext.SourceElements, parseStatement)`. This is where parsing recursion starts.
-   `:1042` calls `createSourceFile` with statement Nodes to create Node SourceFile.
-   `:1061` returns SourceFile.

`:1006` `function clearState`

-   `:1008` Scanner is cleared.
-   `:1013` Parser fields like `sourceText` are set to `undefined`.

`Scanner.ts:927` `export function createScanner` \
Scanner is defined by this function which returns an object acting as scanner instance. Private fields like `pos`, `token` and `tokenValue` are defined as local variables closured by the functions in this object and accessed by functions like `getToken` in the object if they need to be exposed.

`compiler > Scanner.ts:927` `createScanner` > `function scan` \
This function scans next token. Token type and token value are saved at variable `token` and `tokenValue` in function `createScanner`, respectively.

`compiler > factory > nodeFactory.ts:866` `function createIdentifier`

-   `:867` calls `createBaseIdentifier`
    -   `:851` calls `baseFactory.createBaseIdentifierNode`
        -   `:731` calls `new IdentifierConstructor` to construct Node and increases parser's field `nodeCount`.
            -   `services > services.ts:377` `class IdentifierObject extends TokenOrIdentifierObject implements Identifier`

`services > services.ts:201` `class TokenOrIdentifierObject implements Node` `services > types.ts:2` `export interface Node`

The following functions recursively parse and construct AST.

`:1528` `function parseExpected` \
This function compares current token type with expected token type and conditionally calls `scanner.scan()` to scan next token.

`:1684` `function createIdentifier`

-   `:1686` increases parser's field `identifierCount: number`.
-   `:1691` scans next token.
-   `:1692` calls `parser.factory.createIdentifier` and return the returned new Node.

`:2097` `function parseList<T extends Node>(kind: ParsingContext, parseElement: () => T): NodeArray<T>` \
This function parses a list of elements. `parseElement` is repeatedly called until `isListTerminator(kind)` is true.

`:6136` `function parseStatement(): Statement` \
This function reads `token` and calls corresponding parsing function.

`:6795` `function parseClassDeclarationOrExpression(pos: number, hasJSDoc: boolean, decorators: NodeArray<Decorator> | undefined, modifiers: NodeArray<Modifier> | undefined, kind: ClassLikeDeclaration["kind"]): ClassLikeDeclaration`

-   `:6797` consumes `class`.
-   `:6799` calls `parseNameOfClassDeclarationOrExpression` to parse class name and saved constructed Node as `name`.
-   `:6800` calls `parseTypeParameters` to parse tokens `<...>` and save Node as `typeParameters`.
-   `:6802` calls `parseHeritageClauses` to parse heritage clauses and save as `heritageClauses`.
-   `:6805` consumes `{`
-   `:6808` calls `parseClassMembers` to parse class members and save Nodes as array `members`
-   `:6809` consumes `}`
-   `:6816` calls `parser.factory.createClassDeclaration` with above child Nodes to create class Node.
-   `:6818` returns class Node.

#### Checker, Binder and related

> In the following notes, `:{number}` means the `{number}`th line of `src/compiler/checker.ts`.

`:296` `export function createTypeChecker`

-   `:982` calls `initializeTypeChecker`
    -   `:40537` calls `compiler > binder.ts:176` > `bindSourceFile` for each each SourceFile in Program.

> In the following notes, all functions and variables are defined in `createTypeChecker` and act as fields of object TypeChecker.

> In the following notes, `:{number}` means the `{number}`th line of `src/compiler/binder.ts`.

`:176` `export function bindSourceFile`

-   `:180` calls `binder` which is a function created by `createBinder`
    -   `:241` `function createBinder` > `function createBinder`. This is function returned by `createBinder` and assigned to `binder`.
        -   `:255` If `file.locals` is `undefined`, call `bind` with `file`.

> In the following notes, all functions and variables are defined in `createBinder` and act as fields of object Binder.

`:2403` `function bind(node: Node | undefined): void`

-   `:2404` returns if `node` is `undefined`.
-   `:2437` saves current parent and sets node to parent.
-   `:2440` calls `bindContainer` or `bindChildren` depending on node is container or not.

`:611` `function bindContainer(node, containerFlags)`

-   `:642` calls `compiler > utilities.ts:38` > `export function createSymbolTable` and saves returned SymbolTable to `container.locals`.
-   `:644` calls `addToContainerChain` to set `container` to `lastContainer.nextContainer` and change `lastContainer` to `container`.
-   `:676` calls `bindChildren` with `node`.

`:737` `function bindChildren(node: Node): void`

-   `:751` switches depending on `node.kind`
    -   `:835` `case SyntaxKind.SourceFile`
        -   `:836` calls `bindEachFunctionsFirst` with `node.statements`
        -   `:837` calls `bind` with `node.endOfFileToken`
    -   `:855` `default:`
        -   `:856` calls `bindEachChild` with `node`
            -   `:734` calls `compiler > parser.ts:76` > `export function forEachChild`

`:720` `function bindEachFunctionsFirst`

-   `:721` calls `bind` for each FunctionDeclaration statement.
-   `:722` calls `bind` for each other statement.

#### watch

> In the following notes, `:{number}` means the `{number}`th line of `src/compiler/watch.ts`.

`:362` `export function emitFilesAndReportErrorsAndGetExitStatus`

-   `:372` calls `emitFilesAndReportErrors`

`:303` `export function emitFilesAndReportErrors`

-   `:326` calls `program.getGlobalDiagnostics`

#### executeCommandLine

> In the following notes, `:{number}` means the `{number}`th line of `src/executeCommandLine/executeCommandLine.ts`.

`tsc > tsc.ts:21` calls `ts.executeCommandLine` with arguments `ts.sys, ts.noop, ts.sys.args`.

`:389` `export function executeCommandLine`

-   `:427` calls `executeCommandLineWorker`
    -   `:370` calls `performCompilation`
        -   `:536` calls `compiler > program.ts:771` > `createProgram` and saves return Program as `program`.
        -   `:537` calls `compiler > watch.ts:362` > `emitFilesAndReportErrorsAndGetExitStatus`
        -   `:545` calls `sys.exit` to exit tsc.

## Miscellaneous

### Handle undefined

```ts
let x = foo ?? bar();
```

is equivalent to

```ts
let x = (foo !== null && foo !== undefined) ?
    foo :
    bar();
```

### Strictness

TypeScript has several type-checking strictness flags that can be turned on or off.

The `--strict` flag in the CLI, or

```json
{
    "compilerOptions": {
        // ...
        "strict": true
    }
}
```

in a `tsconfig.json` toggles them all on simultaneously.

### Optional Parameters

```js
function f(x?: number) {
  // ...
}
```

The `x` parameter will actually have the type `number | undefined`.

### Timer ( node vs window )

```ts
let timer: ReturnType<typeof setTimeout> = setTimeout(() => { ... });

clearTimeout(timer);
```

### Return type `never`

Any function that returns `never` is that it never returns. For example,

```ts
function intervalError(): never {
    throw 'Interval error occurs.';
}
```

### Assertion Functions

[Github PR](https://github.com/microsoft/TypeScript/pull/32695)

```ts
function assert(condition: any, msg?: string): asserts condition {
  if (!condition) {
    throw new AssertionError(msg);
  }
}
```

> `asserts x` reflects the full effects of a logical expression when `x` is truthy, similar to an equivalent `if` statement. `asserts x` is true simply narrows the type of a variable passed for `x`, similar to the effects of passing `x` to an equivalent user defined type predicate function.

### Semicolon Formatter Option

Setting in VSCode.

```json
"typescript.format.semicolons": "insert"
```

### ts-ignore and ts-expect-error

[TS 3.9 Release Note: `ts-ignore` or `ts-expect-error`?](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#ts-ignore-or-ts-expect-error)

[TS 2.6 Release Notes: Suppress errors in .ts files using `// @ts-ignore` comments](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-6.html#suppress-errors-in-ts-files-using--ts-ignore-comments)

### ts-node

[Github](https://github.com/TypeStrong/ts-node)

ts-node is a TypeScript execution engine and REPL for Node.js.

# Libraries

## Web APIs

[MDN: Client-side web APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs)

[Reference](https://developer.mozilla.org/en-US/docs/Web/API)

### Node

[Web APIs > Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)

```
EventTarget <- Node
```

-   `childNodes`

    Returns a live `NodeList` containing all the children of this node (including elements, text and comments).

-   `parentNode`
-   `appendChild(childNode)`

-   `contains(otherNode)` returns a boolean value indicating whether a node is a descendant of a given node.

### Document

[Web APIs > Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)

```
EventTarget <- Node <- Document
```

-   `body` Returns the `<body>` or `<frameset>` node of the current document.

-   `createElement(tagName)` Creates a new element with the given tag name.

### Element

[Web APIs > Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

```
EventTarget <- Node <- Element
```

#### Properties and Methods

-   `children` \
     Returns the child elements of this element.

-   `className` \
     Is a `DOMString` representing the class of the element.

<br>

-   `clientHeight` The inner height of the element. \
     `clientLeft` The width of the left border of the element.\
     `clientTop` The width of the top border of the element.\
     `clientWidth` The inner width of the element.

-   `getClientRects()` returns a collection of `DOMRect` objects that indicate the bounding rectangles for each `CSS border box` in a client. \
     Properties of `DOMRect` - `x` \
     `y` \
     The x/y coordinate of left-top corner. - `width` \
     `height` \
     The width/height of bounding box. - `top` \
     `right` \
     `bottom` \
     `left` \
     The top/right/bottom/left coordinate of bounding box. ( If `width` < `0` or `height` < `0`, `left` or `top` will be `x + width` or `y + height`, respectively. ) <br>

-   `scrollHeight` Returns a `Number` representing the scroll view height of an element.
-   `scrollTop` A `Number` representing number of pixels the top of the document is scrolled vertically.

-   `scroll()` \
     `scrollBy()` \
     `scrollTo()`

    All these methods accept `x-coord, y-coord` or `options` as parameter(s).

    The parameter `options` is a [ScrollToOptions](https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions) dictionary.

    -   `top` Specifies the number of pixels along the Y axis to scroll the window or element.
    -   `left` Specifies the number of pixels along the X axis to scroll the window or element.
    -   `behavior` It can be `smooth` or `auto`, the later will scroll in a single jump while the former will scroll with an animation.

-   `scrollIntoView()` \
     `scrollIntoView(alignToTop)` \
     `scrollIntoView(scrollIntoViewOptions)` \
     Scrolls the element's parent container such that the element on which `scrollIntoView()` is called is visible to the user. \
    -   Parameter `alignToTop` is a boolean.
        -   `true` Corresponds to `scrollIntoViewOptions: {block: "start", inline: "nearest"}`. This is the default value.
        -   `false` Corresponds to `scrollIntoViewOptions: {block: "end", inline: "nearest"}`.
    -   Parameter `scrollIntoViewOptions` is an Object with the following properties:
        -   `behavior` One of `auto` or `smooth`. Defaults to `auto`.
        -   `block` Defines vertical alignment. One of `start`, `center`, end, or `nearest`. Defaults to `start`.
        -   `inline` Defines horizontal alignment. One of `start`, `center`, `end`, or `nearest`. Defaults to `nearest`.

<br>

-   `id` \
     Is a `DOMString` representing the id of the element.

-   `innerHTML` \
     Is a `DOMString` representing the markup of the element's content.

<br>

-   `EventTarget.addEventListener()`
-   `before()` \
     Inserts a set of `Node` or `DOMString` objects in the children list of the `Element`'s parent, just before the `Element`.

-   `after()` \
     Inserts a set of `Node` or `DOMString` objects in the children list of the `Element`'s parent, just after the `Element`.

-   `append()` \
     Inserts a set of `Node` objects or `DOMString` objects after the last child of the element.

-   `prepend()` \
     Inserts a set of `Node` objects or `DOMString` objects before the first child of the element.

-   `EventTarget.dispatchEvent()` \
     Dispatches an event to this node in the DOM and returns a boolean value that indicates whether no handler canceled the event.

-   `querySelector()` \
     Returns the first `Node` which matches the specified selector string relative to the element.

-   `querySelectorAll()` \
     Returns a `NodeList` of nodes which match the specified selector string relative to the element.

-   `remove()` \
     Removes the element from the children list of its parent.

-   `replaceChildren(...nodesOrDOMStrings)` \
     Replaces the existing children of a `Node` with a specified new set of children.

-   `replaceWith(...nodes)` \
     Replaces the element in the children list of its parent with a set of `Node` or `DOMString` objects.

#### Events

[Reference](https://developer.mozilla.org/en-US/docs/Web/API/Element#events)

Listen to these events using `addEventListener()` or by assigning an event listener to the `oneventname` property of this interface.

-   WheelEvent

    -   `wheel` Fired when the user rotates a wheel button on a pointing device (typically a mouse).

    -   Event Properties
        -   `deltaX`
        -   `deltaY`
        -   `deltaZ`
        -   `deltaMode`

-   Focus events
    -   `blur` An element has lost focus.
    -   `focus` An element has gained focus.
-   Keyboard events

    [Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)

    -   `keydown`
    -   <del>`keypress` </del>
    -   `keyup`
    -   Event properties
        -   `altKey` \
             `ctrlKey` \
             `metaKey` \
             `shiftKey` \
             Whether the <kbd>alt</kbd>/<kbd>control</kbd>/<kbd>meta</kbd>/<kbd>Shift</kbd> key was down.
        -   `code` Returns a `DOMString` with the code value of the physical key represented by the event. The code values for Windows, Linux, and macOS are list on the [KeyboardEvent: code values](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values) page.
        -   `key` Returns a `DOMString` representing the key value of the key represented by the event. \
             [Full list of key values](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values).

-   Mouse events

    -   `click` \
         `auxclick` \
         A primary/non-primary pointing device button has been pressed and released on an element.
    -   `mousedown` \
         `mouseup` \
         `mousemove` \
         Fired when a pointing device button is pressed/moved/released on an element.

    -   Event properties
        -   `altKey` \
             `ctrlKey` \
             `metaKey` \
             `shiftKey` \
             Whether the <kbd>alt</kbd>/<kbd>control</kbd>/<kbd>meta</kbd>/<kbd>Shift</kbd> key was down.
        -   `button` The button number that was pressed (if applicable) when the mouse event was fired.
        -   `clientX` \
             `clientY` \
             The X/Y coordinate of the mouse pointer in local (DOM content) coordinates.
        -   `offsetX` \
             `offsetY` \
             The X/Y coordinate of the mouse pointer relative to the position of the padding edge of the target node.
        -   `pageX` \
             `pageY` \
             The X/Y coordinate of the mouse pointer relative to the whole document.
        -   `movementX` \
             `movementY` \
             The X/Y coordinate of the mouse pointer relative to the position of the last mousemove event.

### HTMLElement

[Web APIs > HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

```
EventTarget <- Node <- Element <- HTMLElement
```

#### Properties and Methods

-   `offsetHeight` The height of an element, relative to the layout.\
     `offsetWidth` The width of an element, relative to the layout. \
     `offsetTop` The distance from this element's top border to its offsetParent's top border. \
     `offsetLeft` The distance from this element's left border to its `offsetParent`'s left border. \
     `offsetParent` Returns a `Element` that is the element from which all offset calculations are currently computed.

-   `style` Is a `CSSStyleDeclaration` representing the declarations of the element's `style` attribute.\
     Refer to [Web APIs > CSSStyleDeclaration](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration) \

    -   `CSSStyleDeclaration.removeProperty(property)` `property` is a `DOMString` representing the property name to be removed.

-   `hidden` Is a `Boolean` indicating if the element is hidden or not.

-   `tabIndex` Is a `long` representing the position of the element in the tabbing order. Elements that can't be focused can be make focusable by setting this attribute to `0`.

-   `innerText` Represents the "rendered" text content of a node and its descendants. As a getter, it approximates the text the user would get if they highlighted the contents of the element with the cursor and then copied it to the clipboard.

-   `contentEditable` specifies whether or not the element is editable. Its value can be

    -   `"true"` indicates that the element is `contenteditable`.
    -   `"false"` indicates that the element cannot be edited.
    -   `"inherit"` indicates that the element inherits its parent's editable status.

-   `blur()` Removes keyboard focus from the currently focused element.\
     `click()` Sends a mouse click event to the element. `focus()` Makes the element the current keyboard focus.

### Event

[Web APIs > Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

[Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)

-   `currentTarget` Identifies the current target for the event, as the event traverses the DOM. It always refers to the element to which the event handler has been attached.
-   `preventDefault()` Cancels the event (if it is cancelable).

### Fetch

[Reference](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

#### Response

[Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response)

-   `status`

    The status code of the response. (This will be `200` for a success).

-   `arrayBuffer()`

    [Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/arrayBuffer)

    The `arrayBuffer()` method of the `Response` interface takes a `Response` stream and reads it to completion. It returns a promise that resolves with an `ArrayBuffer`.

### Client-side storage

[Learn > Client-side storage](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)

```js
localStorage.setItem('name','Chris');
let myName = localStorage.getItem('name');
localStorage.removeItem('name');
```

### URLSearchParams

[Reference](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)

The `URLSearchParams` interface defines utility methods to work with the query string of a URL.

-   `get(name)` returns the first value associated to the given search parameter.

### Canvas

[Canvas tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
```

`CanvasRenderingContext2D` \
[Reference](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)

-   `font` specifies the current text style to use when drawing text. This string uses the same syntax as the [CSS font](https://developer.mozilla.org/en-US/docs/Web/CSS/font) specifier.
    ```js
    ctx.font = value;
    ```

### Window

[Reference](https://developer.mozilla.org/en-US/docs/Web/API/Window)

A global variable, `window`, representing the window in which the script is running, is exposed to JavaScript code.

-   `location` Gets/sets the location, or current URL, of the window object.
    -   `search` Is a USVString containing a `'?'` followed by the parameters or "querystring" of the URL.

### Audio

[Reference](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

## node

[Node API Documentation](https://nodejs.org/api/)

### path

```js
import * as fs from "fs";
```

#### basename

```js
path.basename('/foo/bar/baz/asdf/quux.html');
// Returns: 'quux.html'

path.basename('/foo/bar/baz/asdf/quux.html', '.html');
// Returns: 'quux'
```

#### dirname

```js
path.dirname('/foo/bar/baz/asdf/quux');
// Returns: '/foo/bar/baz/asdf'
```

#### extname

```js
path.extname('index.html');
// Returns: '.html'

path.extname('index.coffee.md');
// Returns: '.md'

path.extname('index.');
// Returns: '.'

path.extname('index');
// Returns: ''

path.extname('.index');
// Returns: ''

path.extname('.index.md');
// Returns: '.md'
```

#### join

```js
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// Returns: '/foo/bar/baz/asdf'
```

#### normalize

```js
path.normalize('/foo/bar//baz/asdf/quux/..');
// Returns: '/foo/bar/baz/asdf'

path.win32.normalize('C:////temp\\\\/\\/\\/foo/bar');
// Returns: 'C:\\temp\\foo\\bar'
```

#### relative

```js
path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
// Returns: '../../impl/bbb'
```

### fs

```js
import * as fs from 'fs';
```

#### mkdirSync

`fs.mkdirSync(path[, options])`

-   `path`
-   `options`
    -   `recursive` `<boolean>` Default: `false`
    -   `mode` `<string> | <integer>` Not supported on Windows. Default: `0o777`.

#### readFileSync

`fs.readFileSync(path[, options])`

-   `path`
-   `options`
    -   `encoding` `<string> | <null>` Default: `null`
    -   `flag` `<string>` Default: 'r'.

Reads the entire contents of a file.

If the `encoding` option is specified then this function returns a string. Otherwise it returns a buffer.

#### writeFileSync

`fs.writeFileSync(file, data[, options])`

-   `file`
-   `data` `<string> | <Buffer> | <TypedArray> | <DataView> | <Object>`
-   `options`
    -   `encoding` `<string> | <null>` Default: `'utf8'`
    -   `mode` `<integer>` Default: `0o666`
    -   `flag` `<string>` Default: `'w'`

### net

```js
import * as net from "net";
```

#### Socket

##### Event

-   `'close'`

    Emitted once the socket is fully closed. The argument `hadError` is a boolean which says if the socket was closed due to a transmission error.

-   `'connect'`

    Emitted when a socket connection is successfully established.

-   `'data'`

    Emitted when data is received. The argument `data` will be a `Buffer` or `String`. Encoding of data is set by `socket.setEncoding()`.

-   `'drain'`

    Emitted when the write buffer becomes empty.

-   `'end'`

    Emitted when the other end of the socket signals the end of transmission, thus ending the readable side of the socket.

    By default (`allowHalfOpen` is `false`) the socket will send an end of transmission packet back and destroy its file descriptor once it has written out its pending write queue.

-   `'error'`

    Emitted when an error occurs. The `'close'` event will be called directly following this event.

-   `'lookup'`

    Emitted after resolving the host name but before connecting.

    -   `err` `<Error> | <null>` The error object. See [dns.lookup()](https://nodejs.org/api/dns.html#dnslookuphostname-options-callback).
    -   `address` `<string>` The IP address.
    -   `family` `<number> | <null> `The address type. See [dns.lookup()](https://nodejs.org/api/dns.html#dnslookuphostname-options-callback).
    -   `host` `<string>` The host name.

-   `'ready'`

    Emitted when a socket is ready to be used.

    Triggered immediately after `'connect'`

-   `'timeout'`

    Emitted if the socket times out from inactivity. This is only to notify that the socket has been idle. The user must manually close the connection.

##### Methods

-   `address()`

    Returns the bound address, the address `family` name and `port` of the socket as reported by the operating system.

-   `connect()`

    Initiate a connection on a given socket.

    Possible signatures:

    -   `socket.connect(options[, connectListener])`
    -   `socket.connect(path[, connectListener])` for IPC connections.
    -   `socket.connect(port[, host][, connectListener])` for TCP connections.

    This function is asynchronous. When the connection is established, the `'connect'` event will be emitted. If there is a problem connecting, instead of a `'connect'` event, an `'error'` event will be emitted with the error passed to the `'error'` listener. The last parameter `connectListener`, if supplied, will be added as a listener for the `'connect'` event **once**.

    This function should only be used for reconnecting a socket after `'close'` has been emitted or otherwise it may lead to undefined behavior.

    -   `socket.connect(options[, connectListener])`

        For TCP connections, available `options` are:

        -   `port` `<number>` Required. Port the socket should connect to.
        -   `host` `<string>` Host the socket should connect to. **Default**: `'localhost'`.
        -   `localAddress` `<string>` Local address the socket should connect from.
        -   `localPort` `<number>` Local port the socket should connect from.
        -   `family` `<number>`: Version of IP stack. Must be `4`, `6`, or `0`. The value `0` indicates that both IPv4 and IPv6 addresses are allowed. **Default**: `0`.
        -   `noDelay` `<boolean>` If set to `true`, it disables the use of Nagle's algorithm immediately after the socket is established. **Default**: `false`.
        -   `keepAlive` `<boolean>` If set to true, it enables keep-alive functionality on the socket immediately after the connection is established. **Default**: `false`.
        -   `keepAliveInitialDelay` `<number>` If set to a positive number, it sets the initial delay before the first keepalive probe is sent on an idle socket.**Default**: `0`.

    -   `socket.connect(port[, host][, connectListener])`

-   `destroy([error])`

    Ensures that no more I/O activity happens on this socket. Destroys the stream and closes the connection.

-   `end([data[, encoding]][, callback])`

    Half-closes the socket. i.e., it sends a FIN packet. It is possible the server will still send some data.

-   `pause()`

    Pauses the reading of data. That is, `'data'` events will not be emitted.

-   `resume()`

    Resumes reading after a call to `socket.pause()`.

-   `resetAndDestroy()`

    Close the TCP connection by sending an RST packet and destroy the stream. If this TCP socket is in connecting status, it will send an RST packet and destroy this TCP socket once it is connected. Otherwise, it will call `socket.destroy` with an `ERR_SOCKET_CLOSED` Error.

-   `setEncoding([encoding])`

-   `setKeepAlive([enable][, initialDelay])`

-   `setNoDelay([noDelay])`

-   `setTimeout(timeout[, callback])`

    Sets the socket to timeout after timeout milliseconds of inactivity on the socket. By default `net.Socket` do not have a timeout.

    When an idle timeout is triggered the socket will receive a `'timeout'` event but the connection will not be severed. The user must manually call `socket.end()` or `socket.destroy()` to end the connection.

    The optional `callback` parameter will be added as a one-time listener for the `'timeout'` event.

-   `write(data[, encoding][, callback])`

    Sends data on the socket. The second parameter specifies the encoding in the case of a string. It defaults to UTF8 encoding.

    Returns true if the entire data was flushed successfully to the kernel buffer. Returns `false` if all or part of the data was queued in user memory. `'drain'` will be emitted when the buffer is again free.

    The optional `callback` parameter will be executed when the data is finally written out, which may not be immediately.

##### Properties

-   `bytesRead` The amount of received bytes.
-   `bytesWritten` The amount of bytes sent.
-   `connecting`
-   `destroyed`
-   `localAddress`
-   `localPort`
-   `remoteAddress`
-   `remotePort`
-   `remoteFamily` The string representation of the remote IP family. `'IPv4'` or `'IPv6'`.
-   `pending` This is true if the socket is not connected yet, either because `.connect()` has not yet been called or because it is still in the process of connecting.
-   `timeout` The socket timeout in milliseconds as set by `socket.setTimeout()`. It is `undefined` if a timeout has not been set.
-   `readyState`

    This property represents the state of the connection as a string.

    -   `opening`
    -   `open`
    -   `readOnly`
    -   `writeOnly`

#### createConnection

`net.createConnection()`

A factory function, which creates a new `net.Socket`, immediately initiates connection with `socket.connect()`, then returns the `net.Socket` that starts the connection.

#### createServer

`net.createServer([options][, connectionListener])`

-   `options`

    -   `allowHalfOpen` `<boolean>` If set to `false`, then the socket will automatically end the writable side when the readable side ends. Default: `false`.
    -   `pauseOnConnect` `<boolean>` Indicates whether the socket should be paused on incoming connections. Default: `false`.

    -   `noDelay` `<boolean>` If set to `true`, it disables the use of Nagle's algorithm immediately after a new incoming connection is received. Default: `false`.
    -   `keepAlive` `<boolean>` If set to `true`, it enables keep-alive functionality on the socket immediately after a new incoming connection is received.
    -   `keepAliveInitialDelay` `<number>` If set to a positive number, it sets the initial delay before the first keepalive probe is sent on an idle socket.Default: `0`.

-   `connectionListener` `<Function>` Automatically set as a listener for the `'connection'` event.

### UDP

[Reference](https://nodejs.org/api/dgram.html)

#### createSocket

-   `dgram.createSocket(type[, callback])`

### events

Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause `Function` objects ("listeners") to be called.

All objects that emit events are instances of the `EventEmitter` class. These objects expose an `eventEmitter.on`() function that allows one or more functions to be attached to named events emitted by the object. Typically, event names are camel-cased strings but any valid JavaScript property key can be used.

When the `EventEmitter` object emits an event, all of the functions attached to that specific event are called _synchronously_. Any values returned by the called listeners are _ignored_ and discarded.

## Third Party

### plotly

[Github: plotly/plotly.js](https://github.com/plotly/plotly.js)

Open-source JavaScript charting library behind Plotly and Dash

[React Plotly.js in JavaScript](https://plotly.com/javascript/react/)

```sh
npm i plotly.js
```

### axios

[Github: axios/axios](https://github.com/axios/axios)

[Official Site](https://axios-http.com/)

```sh
npm install axios
```

```js
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });
```

### jQuery

[Official Site](https://jquery.com/)

[jQuery Learning Center](https://learn.jquery.com/)

```sh
npm install --save jquery
```

```js
import $ from 'jquery'
```

#### Ajax

```js
// Get plain text or HTML
$.get( "/users.php", {
    userId: 1234
}, function( resp ) {
    console.log( resp ); // server response
});
```

### stacktrace.js

[Github](https://github.com/stacktracejs/stacktrace.js)

```sh
npm install stacktrace-js
```

```js
var callback = function(stackframes) {
    var stringifiedStack = stackframes.map(function(sf) {
        return sf.toString();
    }).join('\n');
    console.log(stringifiedStack);
};

var errback = function(err) { console.log(err.message); };

StackTrace.get().then(callback).catch(errback);
//===> Promise(Array[StackFrame], Error)
//===> callback([
//    StackFrame({functionName: 'func1', args: [], fileName: 'file.js', lineNumber: 203, columnNumber: 9}),
//    StackFrame({functionName: 'func2', args: [], fileName: 'http://localhost:3000/file.min.js', lineNumber: 1, columnNumber: 3284})
//])
```

### KaTeX

[Github](https://github.com/KaTeX/KaTeX)

```sh
npm install katex
```

Options:

[Reference](https://katex.org/docs/options.html)

-   `globalGroup: boolean` \
     Place KaTeX code in the global group. As a consequence, `\def` and `\newcommand` persist in macros across render calls. \
     In LaTeX, constructs such as `\begin{equation}` and `$$` create a local group and prevent definitions from becoming visible outside of those blocks.

-   `colorIsTextColor: boolean` \
     Make `\color` acts like `\textcolor`.

-   `displayMode: boolean` \
     If `true` the math will be rendered in display mode. If `false` the math will be rendered in inline mode.

-   `leqno: boolean` \
     Display math has `\tags` rendered on the left instead of the right
-   `fleqn: boolean` \
     Display math renders flush left with a `2em` left margin.

### Mocha

[Github](https://github.com/mochajs/mocha)

[Documentation](https://mochajs.org/)

```sh
npm install --save-dev mocha
```

`test/test.js`

```js
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
```

`package.json`

```json
"scripts": {
  "test": "mocha --require ts-node/register test/run.ts" // Test typescript.
}
```

Run in browser:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Mocha Tests</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://unpkg.com/mocha/mocha.css" />
  </head>
  <body>
    <div id="mocha"></div>

    <script src="https://unpkg.com/chai/chai.js"></script>
    <script src="https://unpkg.com/mocha/mocha.js"></script>

    <script class="mocha-init">
      mocha.setup('bdd');
      mocha.checkLeaks();
    </script>

    <!-- ↓ ↓ ↓ ↓ ↓ Test scripts ↓ ↓ ↓ ↓ ↓ -->
    <script src="../dist/test/bundle.js"></script>
    <!-- -------------------------------- -->

    <script class="mocha-exec">
      mocha.run();
    </script>
  </body>
</html>
```

### Jest

[Github](https://github.com/facebook/jest)

```sj
npm i -D jest @types/jest babel-jest @babel/core @babel/preset-env @babel/preset-typescript
```

```js
// package.json
{
  // ...
  "babel": {
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "node": "current"
          }
        }
      ],
      "@babel/preset-typescript"
    ]
  },
}
```

[Debugging in VS Code](https://jestjs.io/docs/troubleshooting#debugging-in-vs-code)

```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Jest Tests",
      "type": "node",
      "request": "launch",
      "runtimeArgs": [
        "--inspect-brk",
        "${workspaceRoot}/node_modules/.bin/jest",
        "--runInBand"
      ],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "port": 9229
    }
  ]
}
```

**Expect**

[Reference](https://jestjs.io/docs/expect)

`expect(value)` The `expect` function is used every time you want to test a value.

-   `.toBe(value)` checks referential identity.
-   `.toEqual(value)` compares recursively all properties of object instances (also known as "deep" equality).
-   `.toHaveProperty(keyPath, value?)`
-   `.toMatchObject(object)` checks that received object matches a subset of the properties of expected object.
-   `.objectContaining(object)` checks that the expected object is a subset of the received object.

Options

[Reference](https://jestjs.io/docs/configuration#options)

-   `testEnvironment: string` \
     The test environment that will be used for testing. The default environment in Jest is a Node.js environment. If you are building a web app, you can use a browser-like environment through `jsdom` instead. \
     By adding a `@jest-environment` docblock at the top of the file, you can specify another environment to be used for all tests in that file:

    ```js
    /**
    * @jest-environment jsdom
    */

    test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
    });
    ```

### Testing Library

[Documentation](https://testing-library.com/docs/)

[Github: dom-testing-library](https://github.com/testing-library/dom-testing-library)

[Github: jest-dom](https://github.com/testing-library/jest-dom)

[Github: react-testing-library](https://github.com/testing-library/react-testing-library)

```sh
npm i -D @testing-library/dom @testing-library/jest-dom     # DOM
npm i -D @testing-library/react                             # React
```

`jest-dom` matchers:

-   `toHaveTextContent(text: string | RegExp, options?: {normalizeWhitespace: boolean})` to check whether the given node has a text content or not.

### Gulp

[Github](https://github.com/gulpjs/gulp)

### Flow

[Github](https://github.com/facebook/flow)

[Official Site](https://flow.org/)

[Reference: Type Annotations](https://flow.org/en/docs/types/)

[Github: TypeScript vs Flow](https://github.com/niieani/typescript-vs-flowtype)

[Github: flow-to-ts](https://github.com/Khan/flow-to-ts)

[Github: babel-plugin-flow-to-typescript](https://github.com/Kiikurage/babel-plugin-flow-to-typescript)

#### Comment Types

```js
// If you want to have Flow treat a comment as if it were normal syntax, you can do so by adding a double colon `::` to the start of the comment.

/*::
type Foo = {
  foo: number,
  bar: boolean,
  baz: string
};
*/

class MyClass {
  /*:: prop: string; */
}

// Instead of typing out a full include every time, you can also use the type annotation shorthand with a single colon `:` at the start of the comment.

function method(param /*: string */) /*: number */ {
  // ...
}

// This would be the same as including a type annotation inside an include comment.
function method(param /*:: : string */) /*:: : number */ {
  // ...
}
```

#### Object Types

```js
// Flow supports “exact” object types. Unlike regular object types, it is not valid to pass an object with “extra” properties to an exact object type.
var foo: {| foo: string |} = { foo: "Hello", bar: "World!" }; // Error!

// Flow provides a special kind of property, called an “indexer property.”
var o: { [string]: number } = {};
```

#### Generic Types

```js
// Generic types act as bounds
function identity<T: string>(val: T): T {
    // ...
    return val;
}

// You can also specify the subtyping behavior of a generic via variance sigils.
// By default, generics behave invariantly,
// but you may add a + to their declaration to make them behave covariantly,
// or a - to their declaration to make them behave contravariantly.
type GenericBox<+T> = T;

var x: GenericBox<number> = 3;
(x: GenericBox<number| string>);
```

#### Utility Types

[Reference](https://flow.org/en/docs/types/utilities/)

```js
// Flow type        // Equivalent in TS
//                  //
$Keys<T>            // keyof T
$Values<T>          // T[keyof T]
$ElementType<T, K>  // T[K]
$Shape<T>           // Partial<T>
```

### Prettier

[Github](https://github.com/prettier/prettier)

[Documentation](https://prettier.io/docs/en/)

To use prettier in browser, need to load the corresponding parser plugins manually.

```js
import prettier from "prettier/standalone";     // Import prettier standalone
import parserBabel from "prettier/parser-babel";    // Import parser plugins

prettier.format(someJsonString, {
  parser: "json",
  plugins:[parserBabel],
});
```

| Option        | Default    | Description                                                                                                                               |
| ------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `printWidth`  | `80`       |
| `tabWidth`    | `2`        |
| `semi`        | `true`     | Add a semicolon at the end of every statement.                                                                                            |
| `singleQuote` | `false`    | Use single quotes instead of double quotes.                                                                                               |
| `parser`      | None       | <ul><li>`json` with parser in `prettier/parser-babel` </li></ul>                                                                          |
| `proseWrap`   | `preserve` | <ul><li>`never`: Do not align table contents if it exceeds print width [PR5701](https://github.com/prettier/prettier/pull/5701)</li></ul> |

**Ignoring Code**

To exclude files from formatting, create a `.prettierignore` file in the root of your project. `.prettierignore` uses [gitignore syntax](https://git-scm.com/docs/gitignore#_pattern_format).

A JavaScript comment of `// prettier-ignore` will exclude the next node in the abstract syntax tree from formatting.

JSX `{/* prettier-ignore */}`.

HTML `<!-- prettier-ignore -->` `<!-- prettier-ignore-attribute -->` `<!-- prettier-ignore-attribute (mouseup) -->`

CSS `/* prettier-ignore */`

### Browserify

[Github](https://browserify.org/index.html)

[Handbook](https://github.com/browserify/browserify-handbook)

```sh
npm install -g browserify

# Recursively bundle main.js and its dependencies into bundle.jsn
browserify main.js -o bundle.js
```

```html
<!-- Use bundle.js in browser -->
<script src="bundle.js"></script>
```

### lodash

[Github](https://github.com/lodash/lodash)

[Documentation](https://lodash.com/docs/4.17.15)

`_.isEqual(value, other)` \
Performs a deep comparison between two values to determine if they are equivalent.

`_.escape([string=''])` \
Converts the characters "&", "<", ">", '"', and "'" in string to their corresponding HTML entities.

`_.zip([arrays])` \
Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.

`_.tail(array)` \
Gets all but the first element of `array`.

`_.replace([string=''], pattern, replacement)` \
Replaces matches for `pattern` in `string` with `replacement`.

`_.castArray(value)` \
Casts `value` as an array if it's not one.

`_.clone(value)` \
`_.cloneDeep(value)` \
Creates a shallow/deep clone of value without/with recursion.

`_.times(n, [iteratee=_.identity])` \
Invokes the iteratee `n` times, returning an array of the results of each invocation. The iteratee is invoked with one argument; _(index)_.

### Express

[Github](https://github.com/expressjs/express)

[Get Started](https://expressjs.com/en/starter/installing.html)

```sh
npm i express
npm i -D @types/express
```

```js

// Hello World
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)


// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

// Routes with route parameters
app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params) // req.params: { "userId": "34", "bookId": "8989" }
})
```

### cors

Node.js CORS middleware

[Github](https://github.com/expressjs/cors)

```js
var express = require('express')
var cors = require('cors')
var app = express()


// Enable All CORS Requests
app.use(cors())

// Enable CORS for a Single Route
app.get('/products/:id', cors(), function (req, res, next) {
  // ...
})
```

### utility-types

Collection of utility types, complementing TypeScript built-in mapped types and aliases (think "lodash" for static types).

[Github](https://github.com/piotrwitek/utility-types)

### ts-essentials

All basic TypeScript types in one place.

[Github](https://github.com/krzkaczor/ts-essentials)

```sh
npm i ts-essentials
```

### rimraf

A `rm -rf` util for nodejs

[Github](https://github.com/isaacs/rimraf)

```sh
npm i rimraf
```

### node-mkdirp

Recursively mkdir, like `mkdir -p`, but in node.js

[Github](https://github.com/substack/node-mkdirp)

```sh
npm i mkdirp
```

### rollup

Next-generation ES module bundler

[Github](https://github.com/rollup/rollup)

```sh
npm i -D rollup

npx rollup [options] <entry file>
```

CLI Options:

-   `-c <filename>` \
     `--config <filename>` \
     Use this config file. If argument is used but value is unspecified, defaults to `rollup.config.js`.

-   `--failAfterWarnings` Exit with an error if the build produced warnings.

Configuration Files

`rollup.config.js`

```js
export default {
  // Options as object properties here.
};
```

Config options:

[Reference](https://rollupjs.org/guide/en/#big-list-of-options)

-   `input` \
     type: `string | string [] | { [entryName: string]: string }` \
     The bundle's entry point(s).

-   `output.file` \
     type: `string` \
     The file to write to.

-   `output.format` \
     type: `string` \
     Specifies the format of the generated bundle. One of the following:

    -   `es` Keep the bundle as an ES module file.

-   `plugins` \
     type: `Plugin | (Plugin | void)[]` \
     See [Using plugins](https://rollupjs.org/guide/en/#using-plugins) for more information on how to use plugins.

-   `external` \
     type: `(string | RegExp)[] | RegExp | string | (id: string, parentId: string, isResolved: boolean) => boolean` \
     Indicate if module with ID should remain external to the bundle. The matched IDs should be either:
    -   the name of an external dependency, exactly the way it is written in the import statement
    -   a resolved ID (like an absolute path to a file)

Plugins:

[Rollup Plugin List](https://github.com/rollup/awesome)

-   [@rollup/plugin-babel](https://github.com/rollup/plugins/tree/master/packages/babel)

    ```sh
    npm i -D @rollup/plugin-babel
    ```

    `rollup.config.js`

    ```js
    import { babel } from '@rollup/plugin-babel';

    export default {
        // ...
        plugins: [babel({ babelHelpers: 'bundled' })]
    };
    ```

    Options

    This plugin respects Babel [configuration files](https://babeljs.io/docs/en/configuration) by default.

    All options are as per the [Babel documentation](https://babeljs.io/docs/en/options), plus the following:

    -   `babelHelpers` \
         type: `'bundled' | 'runtime' | 'inline' | 'external'` \
         Default: `'bundled'`
        -   `runtime` you should use this especially when building libraries with Rollup. It has to be used in combination with `@babel/plugin-transform-runtime` and you should also specify `@babel/runtime` as dependency of your package.

-   [@rollup/plugin-alias](https://github.com/rollup/plugins/tree/master/packages/alias)

    ```sh
    npm i -D @rollup/plugin-alias
    ```

    `rollup.config.js`

    ```js
    import { babel } from '@rollup/plugin-babel';

    export default {
        // ...
        plugins: [
            alias({
                entries: [
                    // This will replace all import '
                    { find: 'utils', replacement: '../../../utils' },
                    { find: 'batman-1.0.0', replacement: './joker-1.5.0' }
                ]
            })
        ]
    };
    ```

### Eslint

[Official Site](https://eslint.org/)

[Configuring ESLint](https://eslint.org/docs/user-guide/configuring/)

[TypeScript ESLint](https://typescript-eslint.io/)

[Linting with Type Information](https://typescript-eslint.io/docs/linting/type-linting/)

[ESLint Rules](https://eslint.org/docs/rules/)

[TypeScript ESLint Rules](https://typescript-eslint.io/rules/)

```sh
npm i -D eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

`.eslintrc.js`

```js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
};
```

`.eslintignore`

```
# don't ever lint node_modules
node_modules
# don't lint build output (make sure it's set to your correct build folder name)
dist
```

### open

Open stuff like URLs, files, executables. Cross-platform.

[Github](https://github.com/sindresorhus/open)

### cosmiconfig

Find and load configuration from a package.json property, rc file, or CommonJS module

[Github](https://github.com/davidtheclark/cosmiconfig)

### json-bigint

JSON.parse/stringify with bigints support

[Github](https://github.com/sidorares/json-bigint)

```ts
import JSONBigInt from "json-bigint";
const json = JSONBigInt({ alwaysParseAsBig: true, useNativeBigInt: true });
json.stringify
json.parse
```

### clipboard.js

Modern copy to clipboard. No Flash. Just 3kb gzipped.

[Github](https://github.com/zenorocha/clipboard.js)

```sh
npm i clipboard
```

### normalize.css

A modern alternative to CSS resets

[Github](https://github.com/necolas/normalize.css)

```sh
npm i normalize.css
```

```js
// With webpack.
import 'normalize.css'
```

### Immer

Create the next immutable state by mutating the current one

[Github](https://github.com/immerjs/immer)

```sh
npm i immer
```

### FileSaver.js

An HTML5 saveAs() FileSaver implementation

[Github](https://github.com/eligrey/FileSaver.js)

```sh
npm i file-saver
```

```js
import { saveAs } from 'file-saver';

var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
saveAs(blob, "hello world.txt");
```

### csstype

Strict TypeScript and Flow types for style based on MDN data

[Github](https://github.com/frenic/csstype)

```sh
npm i csstype
```

### floating-ui

A low-level toolkit to position floating elements while intelligently keeping them in view. Tooltips, popovers, dropdowns, menus, and more

[Github](https://github.com/floating-ui/floating-ui)

```sh
npm i tippy.js
npm i @tippyjs/react # For react
```

```tsx
import {useFloating, shift} from '@floating-ui/react-dom';

function App() {
  const {x, y, reference, floating, strategy} = useFloating({
    placement: 'right',
    middleware: [shift()],
  });

  return (
    <>
      <button ref={reference}>Button</button>
      <div
        ref={floating}
        style={{
          position: strategy,
          top: y ?? '',
          left: x ?? '',
        }}
      >
        Tooltip
      </div>
    </>
  );
}
```

### tippyjs

Tooltip, popover, dropdown, and menu library

[Github](https://github.com/atomiks/tippyjs)

### slidev

Presentation Slides for Developers (Beta)

[Github](https://github.com/slidevjs/slidev)

```sh
npm init slidev
```

### htmlparser2

The fast & forgiving HTML and XML parser

[Github](https://github.com/fb55/htmlparser2)

### pdf.js

PDF Reader in JavaScript

[Github](https://github.com/mozilla/pdf.js)

```
npm install pdfjs-dis
```

[Documentation of the core of Mozilla's PDF.js library](https://github.com/MeiKatz/pdfjs-docs/blob/master/README.md)

```ts
import * as pdfjsLib from "pdfjs-dist";
import * as pdfjsViewer from "pdfjs-dist/web/pdf_viewer";
```

#### pdfjsLib

-   `class PDFDocumentProxy`

    -   `numPages: number` Total number of pages in the PDF file.
    -   `getPage(pageNumber): Promise<PDFPageProxy>`
        -   `pageNumber: number` The page number to get. The first page is 1.

-   `class PDFPageProxy`

    -   `render({...})`
        -   `canvasContext: Object` A 2D context of a DOM Canvas object.
        -   `viewport: PageViewport` Rendering viewport obtained by calling the `PDFPageProxy.getViewport` method. PDF page viewport created based on scale, rotation and offset.
            -   `viewBox: number[]` The xMin, yMin, xMax and yMax coordinates.
            -   `scale: number` The scale of the viewport.
            -   `rotation: number` The rotation, in degrees, of the viewport. Must be a multiple of 90 degrees.
            -   `offsetX: number` The horizontal, i.e. x-axis, offset.
            -   `offsetY: number`
            -   `dontFlip: boolean` If true, the y-axis will not be flipped.

#### pdfjsViewer

-   `class` `pdfjsViewer.EventBus`

    Simple event bus for an application. Listeners are attached using the `on` and `off` methods. To raise an event, the `dispatch` method shall be used.

-   `class` `pdfjsViewer.PDFLinkService`

    Performs navigation functions inside PDF, such as opening specified page, or destination.

    -   ```js
        constructor(options)
        ```

        -   `eventBus: EventBus` The application event bus.

-   `pdfjsViewer.NullL10n`

    No-op implementation of the localization service.

-   `class` `pdfjsViewer.PDFViewer`

    -   ```js
        constructor(options)
        ```

        -   `container: HTMLDivElement` The container for the viewer element.
        -   `eventBus: EventBus` The application event bus.
        -   `linkService: IPDFLinkService` The navigation/linking service.
        -   `l10n: IL10n` Localization service.
        -   [`useOnlyCssZoom: boolean`] Enables CSS only zooming. The default value is `false`.
        -   [`textLayerMode: number`] Controls if the text layer used for selection and searching is created. The constants from {TextLayerMode} should be used. The default value is `TextLayerMode.ENABLE`.

-   `class` `pdfjsViewer.PDFHistory`

    -   ```js
        constructor(options)
        ```

        -   `eventBus: EventBus` The application event bus.
        -   `linkService: IPDFLinkService` The navigation/linking service.

### monaco-editor

[Github](https://github.com/microsoft/monaco-editor)

[Integrating the ESM version of the Monaco Editor](https://github.com/microsoft/monaco-editor/blob/master/docs/integrate-esm.md)

[Monaco Editor Webpack Plugin](https://github.com/Microsoft/monaco-editor-webpack-plugin)

[Samples for using the Monaco Editor](https://github.com/microsoft/monaco-editor-samples)

[Playground](https://microsoft.github.io/monaco-editor/playground.html)

```
npm install --save monaco-editor

npm install --save monaco-editor-webpack-plugin
```

### JSDoc

[Github](https://jsdoc.app/index.html)

Tags:

[Reference](https://jsdoc.app/index.html#block-tags)

-   `@file` \
     `@fileoverview` \
     `@overview` \
     provides a description for a file. Use the tag in a JSDoc comment at the beginning of the file.
-   `{@link}` \
     `{@linkcode}`: Forces the link's text to use a monospace font. \
     `{@linkplain}`: Forces the link's text to appear as normal text, without a monospace font. \
     Syntax \
     `{@link namepathOrURL}` \
     `[link text]{@link namepathOrURL}` \
     `{@link namepathOrURL|link text}` \
     `{@link namepathOrURL link text (after the first space)}` \
     creates a link to the namepath or URL.

### moment

Parse, validate, manipulate, and display dates in javascript.

[Github](https://github.com/moment/moment/)

### pdf2json

A PDF file parser that converts PDF binaries to text based JSON, powered by a fork of PDF.JS

[Github](https://github.com/modesty/pdf2json)

# Webpack

```sh
npm i -D typescript @types/node ts-node                     # Typescript
npm i -D webpack @types/webpack                             # Webpack
npm i -D webpack-dev-server @types/webpack-dev-server       # Webpack dev server
npm i -D webpack-cli                                        # Webpack CLI
npm i -D ts-loader style-loader css-loader                  # Loaders
npm i -D html-webpack-plugin                                # Plugins


# Optional
npm i -D less less-loader                                   # less-loader
```

```ts
import * as webpack from 'webpack';
import 'webpack-dev-server';

const config: webpack.Configuration = {

};

export default config;
```

## Documentation

### Guides

[Official Site](https://webpack.js.org/)

[Official Documentation](https://webpack.js.org/concepts/)

[Getting Started ( _Suggested for Beginner_ ) ](https://webpack.js.org/guides/getting-started/)

[Webpack Book](https://survivejs.com/webpack/foreword/)

### References

[Command Line Interface ( CLI ) ](https://webpack.js.org/api/cli/)

[Configuration Options](https://webpack.js.org/configuration/#options)

[Modules](https://webpack.js.org/concepts/modules/)

[Modules Configuration](https://webpack.js.org/configuration/module/)

[Awesome Webpack resources, libraries and tools](https://github.com/webpack-contrib/awesome-webpack)

### Videos

[Youtube: Manually Bundling an Application](https://www.youtube.com/watch?v=UNMkLHzofQI)

[Youtube: Live Coding a Simple Module Bundler](https://www.youtube.com/watch?v=Gc9-7PBqOC8)

[Detailed Explanation of a Simple Module Bundler](https://github.com/ronami/minipack)

## Guides

### Basic Setup

Project files

```
projectRoot
|- /dist
  |- index.html
|- /src
  |- index.js
|- package.json
|- webpack.config.js
```

`package.json`

```json
{
  "private": "true",
  "scripts": {
    "build": "webpack"
  },
  "devDependencies": {
    "webpack": "^5.51.1",
    "webpack-cli": "^4.8.0"
  }
}
```

`webpack.config.js`

```js
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
};
```

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root-container"></div>
    <script src="bundle.js"></script>
</body>
</html>
```

`index.js`

```js
document.getElementById("root-container").innerHTML = "Hello World!";
```

Generate files can be understood by browser:

```sh
npm run build
```

Now `./dist/index.html` can be opened with browser correctly.

### Asset Management

#### Loading CSS

```sh
npm install --save-dev style-loader css-loader
```

Add config to `webpack.config.js`

```js
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
```

Create CSS file `./src/style.css` and load it by inserting

```js
import './style.css';
```

into `src/index.js`.

#### Loading Images

`webpack.config.js`

```js
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    }
```

### Output Management

#### Setting up HtmlWebpackPlugin

```sh
npm install --save-dev html-webpack-plugin
```

`webpack.config.js`

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
    ],
}
```

### Development

`package.json`

```json
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1",
     "watch": "webpack --watch",
     "build": "webpack"
   },
```

#### Using source maps

`webpack.config.js`

```js
module.exports = {
    devtool: 'inline-source-map',
}
```

#### Choosing a Development Tool

-   Using Watch Mode

    You can instruct webpack to "watch" all files within your dependency graph for changes. If one of these files is updated, the code will be recompiled so you don't have to run the full build manually.

    `package.json`

    ```json
    "scripts": {
        "watch": "webpack --watch",
    },
    ```

-   Using webpack-dev-server

    The `webpack-dev-server` provides you with a rudimentary web server and the ability to use live reloading

    ```sh
    npm install --save-dev webpack-dev-server
    ```

    `webpack.config.js`

    ```js

    module.exports = {
        mode: 'development',
        devServer: {
            static: './dist',
        },
    }
    ```

    This tells `webpack-dev-serve`r to serve the files from the `dist` directory on `localhost:8080`. <br><br>

    > `webpack-dev-server` serves bundled files from the directory defined in `output.path`, i.e., files will be available under `http://[devServer.host]:[devServer.port]/[output.publicPath]/[output.filename]`.
    >
    > `webpack-dev-server` doesn't write any output files after compiling. Instead, it keeps bundle files in memory and serves them as if they were real files mounted at the server's root path.

    `package.json`

    ```json
    "scripts": {
        "start": "webpack serve --open",
    },
    ```

-   Using webpack-dev-middleware

    ```sh
    npm install --save-dev express webpack-dev-middleware
    ```

    `webpack.config.js`

    ```js
    {
    // ...
        output: {
            // ...
            publicPath: "/", // make sure files are served correctly on http://localhost:3000
        },
    };
    ```

    `server.js`

    ```js
    const express = require('express');
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');

    const app = express();
    const config = require('./webpack.config.js');
    const compiler = webpack(config);

    // Tell express to use the webpack-dev-middleware and use the webpack.config.js
    // configuration file as a base.
    app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
    );

    // Serve the files on port 3000.
    app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
    });
    ```

### Asset Modules

[Reference](https://webpack.js.org/guides/asset-modules/)

Asset Modules type replaces all of these loaders by adding 4 new module types:

-   `asset/resource` emits a separate file and exports the URL. Previously achievable by using `file-loader`.
-   `asset/inline` exports a data URI of the asset. Previously achievable by using `url-loader`.
-   `asset/source` exports the source code of the asset. Previously achievable by using `raw-loader`.
-   `asset` automatically chooses between exporting a data URI and emitting a separate file. Previously achievable by using `url-loader` with asset size limit.

#### Inlining assets

`webpack.config.js`

```js
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/inline',
            }
        ]
    }
```

### Hot Module Replacement

Since `webpack-dev-server` v4.0.0, Hot Module Replacement is enabled by default.

If you took the route of using `webpack-dev-middleware` instead of `webpack-dev-server`, please use the [webpack-hot-middleware](https://github.com/webpack-contrib/webpack-hot-middleware) package to enable HMR on your custom server or application.

```sh
npm install --save-dev webpack-hot-middleware
```

```js
plugins: [
    new webpack.HotModuleReplacementPlugin(),
]
```

Add `webpack-hot-middleware/client` into the entry array.

## Concepts

[Reference](https://webpack.js.org/concepts/)

### Modules

[Reference](https://webpack.js.org/concepts/modules/)

Webpack applies the concept of modules to any file in your project.

In contrast to Node.js modules, webpack modules can express their dependencies in a variety of ways. A few examples are:

-   An ES2015 `import` statement
-   A CommonJS `require()` statement
-   An AMD `define` and `require` statement
-   An `@import statement` inside of a css/sass/less file.
-   An image url in a stylesheet `url(...)` or HTML `<img src=...>` file.

### Module Resolution

[Reference](https://webpack.js.org/concepts/module-resolution/)

## Configuration

[Reference](https://webpack.js.org/configuration/)

### Configuration Languages

```sh
npm install --save-dev typescript ts-node @types/node @types/webpack
# and, if using webpack-dev-server
npm install --save-dev @types/webpack-dev-server

```

`webpack.config.ts`

```ts
import * as path from 'path';
import * as webpack from 'webpack';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';

const config: webpack.Configuration = {
  mode: 'production',
  entry: './foo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js',
  },
};

export default config;
```

The `module` in `compilerOptions` in `tsconfig.json` should be `commonjs`

`tsconfig.json`

```json
{
  "compilerOptions": {
    "module": "ESNext",
  },
  "ts-node": {
    "compilerOptions": {
      "module": "CommonJS"
    }
  }
}
```

### Entry and Context

[Reference](https://webpack.js.org/configuration/entry-context/)

The entry object is where webpack looks to start building the bundle. The context is an absolute string to the directory that contains the entry files.

`context` is the base directory, an **absolute path**, for resolving entry points and loaders from the configuration.

```js
const path = require('path');

module.exports = {
  //...
  context: path.resolve(__dirname, 'app'),
};
```

`entry` is the point or points where to start the application bundling process.

```js
module.exports = {
  //...
  entry: {
    app: './app.js',
    home: { import: './contact.js', filename: 'pages/[name][ext]' },
    about: { import: './about.js', filename: 'pages/[name][ext]' },
  },
};
```

### Output

[Reference](https://webpack.js.org/configuration/output/)

#### output.filename

This option determines the name of each output bundle. The bundle is written to the directory specified by the `output.path` option.

Entry points can use substitutions to give each bundle a unique name.

```js
output: {
  filename: '[name].bundle.js',                 // Use entry name.
  filename: '[id].bundle.js',                   // Use internal chunk id.
  filename: '[contenthash].bundle.js',          // Use hashes generated from the generated content.
  filename: '[name].[contenthash].bundle.js',   // Combine multiple substitutions.
  filename: (pathData) => 'name.js'            // Use the function to return the filename.
}
```

Note this option is called filename but you are still allowed to use something like `'js/[name]/bundle.js'` to create a folder structure.

**Template strings**

The following substitutions are available in template strings (via webpack's internal [TemplatedPathPlugin](https://github.com/webpack/webpack/blob/master/lib/TemplatedPathPlugin.js):

Substitutions available on Compilation-level:

<table>
<tr><td><code>[fullhash]</code> </td><td>The full hash of compilation</td></tr>
</table>

Substitutions available on Chunk-level:

<table>
<tr><td><code>[id]</code> </td><td>The ID of the chunk</td></tr>
<tr><td><code>[name]</code> </td><td>The name of the chunk, if set, otherwise the ID of the chunk</td></tr>
</table>

Substitutions available on File-level:

<table>
<tr><td><code>[file]</code> </td><td>Filename and path, without query or fragment</td></tr>
<tr><td><code>[base]</code> </td><td>Only filename (including extensions), without path</td></tr>
<tr><td><code>[path]</code> </td><td>Only path, without filename</td></tr>
<tr><td><code>[name]</code> </td><td>Only filename without extension or path</td></tr>
</table>

### Module

[Reference](https://webpack.js.org/configuration/module/)

These options determine how the [different types of modules](https://webpack.js.org/concepts/modules) within a project will be treated.

#### module.rules

An array of Rules which are matched to requests when modules are created. These rules can modify how the module is created. They can apply loaders to the module, or modify the parser.

A Rule can be separated into three parts — Conditions, Results and nested Rules.

##### Rule Conditions

There are two input values for the conditions:

-   The resource: An absolute path to the file requested. It's already resolved according to the `resolve` rules.
-   The issuer: An absolute path to the file of the module which requested the resource. It's the location of the import.

Example: When we `import './style.css'` within `app.js`, the resource is `/path/to/style.css` and the issuer is `/path/to/app.js`.

In a Rule the properties `test`, `include`, `exclude` and `resource` are matched with the resource and the property `issuer` is matched with the issuer.

When using multiple conditions, all conditions must match.

##### Rule results

Rule results are used only when the Rule condition matches.

There are two output values of a Rule:

-   Applied loaders: An array of loaders applied to the resource.
-   Parser options: An options object which should be used to create the parser for this module.

These properties affect the loaders: `loader`, `options`, `use`.

##### Nested rules

Nested rules can be specified under the properties `rules` and `oneOf`.

##### Rule.exclude

Exclude all modules matching any of these conditions.

##### Rule.include

Include all modules matching any of these conditions.

##### Rule.loader

Rule.loader is a shortcut to `Rule.use: [ { loader } ]`

##### Rule.test

Include all modules that pass test assertion. Refer to [Condition](#Condition)

##### Rule.type

Possible values: \
`'javascript/auto'` `'javascript/dynamic'` `'javascript/esm'`\
`'json'`\
`'webassembly/sync'` `'webassembly/async'`\
`'asset'` `'asset/source'` `'asset/resource'` `'asset/inline'`

Rule.type sets the type for a matching module. This prevents defaultRules and their default importing behaviors from occurring.

See [Asset Modules guide](https://webpack.js.org/guides/asset-modules/) for more about `asset*` type.

#### Condition

Conditions can be one of these:

-   A string: To match the input must start with the provided string. I. e. an absolute directory path, or absolute path to the file.
-   A RegExp: It's tested with the input.
-   A function: It's called with the input and must return a truthy value to match.
-   An array of Conditions: At least one of the Conditions must match.
-   An object: All properties must match. Each property has a defined behavior.
    -   `{ and: [Condition] }`: All Conditions must match.
    -   `{ or: [Condition] }`: Any Condition must match.
    -   `{ not: [Condition] }`: All Conditions must NOT match.

### Resolve

[Reference](https://webpack.js.org/configuration/resolve/)

These options change how modules are resolved.

#### resolve.extensions

Attempt to resolve these extensions in order. If multiple files share the same name but have different extensions, webpack will resolve the one with the extension listed first in the array and skip the rest.

Note that using `resolve.extensions` like above will override the default array, meaning that webpack will no longer try to resolve modules using the default extensions. However you can use `'...'` to access the default extensions:

```js
module.exports = {
  //...
  resolve: {
    extensions: ['.ts', '...'],
  },
};
```

### DevServer

[Reference](https://webpack.js.org/configuration/dev-server/)

```sh
npx webpack serve
```

`devServer.open` Tells dev-server to open the browser after server had been started.

```js
module.exports = {
  //...
  devServer: {
    open: true,             // Open your default browser.
    open: ['/my-page'],     // Open a specified page in a browser.
    open: { /* ... */ },    // An object accepting all options specified from https://github.com/sindresorhus/open
  },
};
```

`devServer.port` Specify a port number to listen for requests on.

`devServer.static` This option allows configuring options for serving static files from the directory (by default `public/` directory).

-   `directory` Tell the server where to serve the content from. This is only necessary if you want to serve static files. Default is `path.join(process.cwd(), 'public')`.
-   `publicPath` Tell the server at which URL to serve `static.directory` content.
-   `watch` Tell dev-server to watch the files served by the `static.directory` option. It is enabled by default, and file changes will trigger a full page reload.

`devServer.watchFiles` This option allows you to configure a list of globs/directories/files to watch for file changes.

## Loaders

[Reference](https://webpack.js.org/loaders/)

### ts-loader

[Guide](https://webpack.js.org/guides/typescript/)

[Github: ts-loader](https://github.com/TypeStrong/ts-loader)

[Using TypeScript Project References with ts-loader and webpack](https://github.com/TypeStrong/ts-loader/blob/main/REFERENCES.md)

```sh
npm i -D typescript ts-loader
```

`webpack.config.js`

```js
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }
};
```

### vue-loader

[Vue Loader](https://vue-loader.vuejs.org/)

```sh
npm i -D @vue/compiler-sfc
```

## Plugins

[Reference](https://webpack.js.org/plugins/)

### HtmlWebpackPlugin

```sh
npm i -D html-webpack-plugin
```

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ...
  plugins: [new HtmlWebpackPlugin()],
};
```

Options:

[Reference](https://github.com/jantimon/html-webpack-plugin#options)

-   `title` The title to use for the generated HTML document.
-   `filename` The file to write the HTML to. Defaults to `index.html`. You can specify a subdirectory here too.
-   `favicon` Adds the given favicon path to the output HTML.

### SourceMapDevToolPlugin

This plugin enables more fine grained control of source map generation. It is also enabled automatically by certain settings of the `devtool` configuration option.

```js
module.exports = {
  // ...
  devtool: false,
  plugins: [new webpack.SourceMapDevToolPlugin({})],
};

```

# Babel

[Official Site](https://babeljs.io/)

## Config Reference

### Config Options

#### Source Map options

-   `sourceMaps`

    Type: `boolean` | `"inline"` | `"both"`

    Default: `false`

    -   `true` to generate a sourcemap for the code and include it in the result object.
    -   `"inline"` to generate a sourcemap and append it as a data URL to the end of the code, but not include it in the result object.
    -   `"both"` is the same as inline, but will include the map in the result object.

    `@babel/cli `overloads some of these to also affect how maps are written to disk:

    -   `true` will write the map to a `.map` file on disk
    -   `"inline"` will write the file directly, so it will have a `data:` containing the map
    -   `"both"` will write the file with a `data:` URL and also a `.map`.

    Note: These options are bit weird, so it may make the most sense to just use `true` and handle the rest in your own code, depending on your use case.

# Node

**[Introduction to Node.js](https://nodejs.dev/learn)**

[Node API Documentation](https://nodejs.org/api/)

[Node Official Documentation](https://nodejs.org/en/docs/guides/)

[npm Official Documentations](https://docs.npmjs.com/)

[npm package.json Documentation](https://docs.npmjs.com/files/package.json)

[npm config Documentation](https://docs.npmjs.com/misc/config)

[npm scripts Documentation](https://docs.npmjs.com/misc/scripts)

```sh
npm install -g nrm --registry=https://registry.npm.taobao.org
nrm use taobao
nrm use taobao
```

Require global installed modules in REPL

```sh
export NODE_PATH=$(npm root --quiet -g)
node
```

## CLI commands

[Reference](https://docs.npmjs.com/cli/v7/commands)

-   `bin` \
     Display npm bin folder.
-   `link` \
     Symlink a package folder.

    ```sh
    cd ~/projects/node-redis    # go into the package directory
    npm link                    # creates global link
    cd ~/projects/node-bloggy   # go into some other package directory.
    npm link redis              # link-install the package

    # Or another equivalent method.
    cd ~/projects/node-bloggy   # go into the dir of your main project
    npm link ../node-redis      # link the dir of your dependency
    ```

-   `list` \
     Print all packages that are installed.

    -   `--all` show all outdated or installed packages.
    -   `--global` show packages installed global
    -   `--link` limiting output to only those packages that are linked.

-   `outdated` \
     Check the registry to see if any (or, specific) installed packages are currently outdated.
-   `update` \
     Update all the packages listed to the latest version

-   `exec` \
     alias `npm x`, `npx`\
     Run a command from a local or remote npm package.

-   `prune` \
     Remove extraneous packages.

-   `uninstall` \
     alias `remove`, `rm`, `r`, `un`, `unlink` \
     Uninstalls a package, completely removing everything npm installed on its behalf. It also removes the package from the `dependencies`, `devDependencies`, `optionalDependencies`, and `peerDependencies` objects in your `package.json`.

## package.json

[Reference](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)

-   `bin` \
     `{"bin": { "myapp": "./cli.js" } }` Please make sure that your file(s) referenced in bin starts with `#!/usr/bin/env node`

## yarn

```sh
npm install -g yarn
yarn config set registry https://registry.npm.taobao.org/
```

### Usage

-   Starting a new project

    ```sh
    yarn init
    ```

-   Installing all the dependencies

    ```sh
    yarn
    yarn install
    ```

-   Adding a dependency

    ```sh
    yarn add [package]
    yarn add [package]@[version]
    yarn add [package]@[tag]
    ```

-   Adding a dependency to different categories of dependencies

    ```sh
    yarn add [package] --dev  # dev dependencies
    yarn add [package] --peer # peer dependencies
    ```

-   Upgrading a dependency

    ```sh
    yarn up [package]
    yarn up [package]@[version]
    yarn up [package]@[tag]
    ```

-   Removing a dependency

    ```sh
    yarn remove [package]
    ```

-   Upgrading Yarn itself
    ```sh
    yarn set version latest
    yarn set version from sources
    ```

# Source Map

[Github](https://github.com/mozilla/source-map)

[MDN: Use a source map](https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Use_a_source_map)

[Source Map Revision 3 Proposal](https://sourcemaps.info/spec.html)

[source-map-visualization](https://sokra.github.io/source-map-visualization/)

To enable the debugger to work with a source map, you must:

-   generate the source map
-   include a comment in the transformed file, that points to the source map.

The comment pointing to the source map may have a different syntax depending on the language itself.

-   For JavaScript files:

    ```js
    //# sourceMappingURL=http://example.com/path/to/your/sourcemap.map
    ```

-   For CSS files, `/*...*/` is the only valid syntax for comments:
    ```css
    /*# sourceMappingURL=http://example.com/path/to/your/sourcemap.map */
    ```

**Terminology**

| Term               | Definition                                                      |
| ------------------ | --------------------------------------------------------------- |
| Generated Code     | The code which is generated by the compiler.                    |
| Original Source    | The source code which has not been passed through the compiler. |
| Base 64 VLQ        |
| Source Mapping URL |

The URL referencing the location of a source map from the generated code.

**Revision 3 Format**

Proposed Format

```json
{
  "version" : 3,                            // File version (always the first entry in the object) and must be a positive integer.
  "file": "out.js",                         // An optional name of the generated code that this source map is associated with.
  "sourceRoot": "",                         // An optional source root, useful for relocating source files on a server or removing repeated values in the “sources” entry.  This value is prepended to the individual entries in the “source” field.
  "sources": ["foo.js", "bar.js"],          // A list of original sources used by the “mappings” entry.
  "sourcesContent": [null, null],           // An optional list of source content, useful when the “source” can’t be hosted. The contents are listed in the same order as the sources in line 5. “null” may be used if some original sources should be retrieved by name.
  "names": ["src", "maps", "are", "fun"],   // A list of symbol names used by the “mappings” entry.
  "mappings": "A,AAAB;;ABCDE;"              // A string with the encoded mapping data.
}
```

The “mappings” data is broken down as follows:

-   each group representing a line in the generated file is separated by a ”;”
-   each segment is separated by a “,”
-   each segment is made up of 1,4 or 5 variable length fields.

Resolving Sources

If the sources are not absolute URLs after prepending of the “sourceRoot”, the sources are resolved relative to the SourceMap (like resolving script src in a html document).

**Conventions**

Source Map Naming

Optionally, a source map will have the same name as the generated file but with a “.map” extension. For example, for “page.js” a source map named “page.js.map” would be generated.

Linking generated code to source maps

The generated code may include a line at the end of the source, with the following form:

```js
//# sourceMappingURL=<url>
```

# MIME types

[Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

A simplest MIME type consists of a _type_ and a _subtype_.

```txt
type/subtype
```

-   The **type** represents the general category into which the data type falls, such as `video` or `text`.
-   The **subtype** identifies the exact kind of data of the specified type the MIME type represents.

An optional **parameter** can be added to provide additional details:

```txt
type/subtype;parameter=value
```

There are two classes of type: **discrete** and **multipart**.

## Type

### Discrete types

The discrete types currently registered with the IANA are:

-   `application`

    Any kind of binary data that doesn't fall explicitly into one of the other types; either data that will be executed or interpreted in some way or binary data that requires a specific application or category of application to use. Generic binary data (or binary data whose true type is unknown) is `application/octet-stream`. Other common examples include `application/pdf`, `application/pkcs8`, and `application/zip`.

-   `audio`

    Audio or music data. Examples include `audio/mpeg`, `audio/vorbis`.

-   `font`

    Font/typeface data. Common examples include `font/woff`, `font/ttf`, and `font/otf`.

-   `image`

    Image or graphical data including both bitmap and vector still images as well as animated versions of still image formats such as animated.

-   `model`

    Model data for a 3D object or scene. Examples include `model/3mf` and `model/vrml`.

-   `text`

    Text-only data including any human-readable content, source code, or textual data such as comma-separated value (CSV) formatted data. Examples include: `text/plain`, `text/csv`, and `text/html`.

-   `video`

    Video data or files, such as MP4 movies (`video/mp4`).

### Multipart types

**Multipart** types indicate a category of document broken into pieces, often with different MIME types; they can also be used — especially in email scenarios — to represent multiple, separate files which are all part of the same transaction. They represent a **composite document**.

-   `message`

    A message that encapsulates other messages.

-   `multipart`

    Data that is comprised of multiple components which may individually have different MIME types.

## Important MIME types for Web developers

-   `application/octet-stream`

    This is the default for binary files. As it means unknown binary file, browsers usually don't execute it, or even ask if it should be executed.

-   `text/plain`

    This is the default for textual files. Even if it really means "unknown textual file," browsers assume they can display it.

-   `text/css`

    CSS files used to style a Web page **must** be sent with `text/css`. If a server doesn't recognize the .css suffix for CSS files, it may send them with `text/plain` or `application/octet-stream` MIME types. If so, they won't be recognized as CSS by most browsers and will be ignored.

-   `text/html`

    All HTML content should be served with this type.

-   `text/javascript`

    Per the HTML specification, JavaScript files should always be served using the MIME type `text/javascript`.

# Vue

[Official Site](https://v3.vuejs.org/)

**[Guide](https://v3.vuejs.org/guide/introduction.html)**

[API Reference](https://v3.vuejs.org/api/)

[Typescript Support](https://v3.vuejs.org/guide/typescript-support.html)

```sh
npm i vue@next

# Addition unnecessary packages.
npm i -D @vue/compiler-sfc @vue/cli @vue/cli-service-global

```

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    // this enables stricter inference for data properties on `this`
    "strict": true,
    "jsx": "preserve",
    "moduleResolution": "node"
  }
}
```

```ts
import { defineComponent } from 'vue'

const Component = defineComponent({
  // type inference enabled
})
```

## Guide

![](../res-4/vue-lifecycle.svg)

Template Syntax

```html
<!-- Text interpolation -->
<span>Message: {{ msg }}</span>

<!-- One-time interpolation that do not update on data change -->
<span v-once>This will never change: {{ msg }}</span>

<!-- Interprets the data as plain text -->
<p>Using mustaches: {{ rawHtml }}</p>
<!-- Interprets the data as HTML, data bindings are ignored -->
<p>Using v-html directive: <span v-html="rawHtml"></span></p>

<!-- Mustaches cannot be used inside HTML attributes. Instead, use a `v-bind` directive. -->
<!-- If the bound value is null or undefined then the attribute will not be included on the rendered element. -->
<div v-bind:id="dynamicId"></div>

<!-- Using JavaScript Expressions -->
{{ number + 1 }}
{{ ok ? 'YES' : 'NO' }}
{{ message.split('').reverse().join('') }}
<div v-bind:id="'list-' + id"></div>

<!-- Directives are special attributes with the `v-` prefix. -->
<p v-if="seen">Now you see me</p>

<!-- Some directives can take an "argument", denoted by a colon after the directive name. -->
<a v-bind:href="url"> ... </a>
<a v-on:click="doSomething"> ... </a>

<!-- It is also possible to use a JavaScript expression in a directive argument by wrapping it with square brackets -->
<!-- Dynamic arguments are expected to evaluate to a string, with the exception of null. The special value null can be used to explicitly remove the binding. -->
<!-- Dynamic argument expressions have some syntax constraints because certain characters, such as spaces and quotes, are invalid inside HTML attribute names. -->
<!-- When using in-DOM templates (templates directly written in an HTML file), you should also avoid naming keys with uppercase characters, as browsers will coerce attribute names into lowercase -->
<a v-bind:[attributeName]="url"> ... </a>
<a v-on:[eventName]="doSomething"> ... </a>

<!-- Modifiers are special postfixes denoted by a dot, which indicate that a directive should be bound in some special way. -->
<form v-on:submit.prevent="onSubmit">...</form>

<!-- v-bind Shorthand -->
<a v-bind:href="url"> ... </a>          <!-- full syntax -->
<a :href="url"> ... </a>                <!-- shorthand -->
<a :[key]="url"> ... </a>               <!-- shorthand with dynamic argument -->
<!-- v-on Shorthand -->
<a v-on:click="doSomething"> ... </a>   <!-- full syntax -->
<a @click="doSomething"> ... </a>       <!-- shorthand -->
<a @[event]="doSomething"> ... </a>     <!-- shorthand with dynamic argument -->
```

## Vue CLI

[Vue CLI Guide](https://cli.vuejs.org/guide/)

## Single File Components

[SFC Guide](https://v3.vuejs.org/guide/single-file-component.html)

# React

[Github](https://github.com/facebook/react)

[Official Site](https://reactjs.org/)

```sh
npx create-react-app my-app                         # JS
npx create-react-app my-app --template typescript   # TS

# Libraries
npm i @emotion/react
npm i @blueprintjs/core@next @blueprintjs/popover2@next
npm i @fontsource/roboto
npm i @fontsource/roboto-mono
npm i @reduxjs/toolkit react-redux
npm i lodash
```

[Getting Started](https://reactjs.org/docs/getting-started.html)

[React API Reference](https://reactjs.org/docs/react-api.html)

[Github: Create React App](https://github.com/facebook/create-react-app)

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

[Github: Awesome React](https://github.com/enaqx/awesome-react)

UI Libraries:

[Github: blueprint](https://github.com/palantir/blueprint)

[Github: ant-design](https://github.com/ant-design/ant-design)

[Github: material-ui](https://github.com/mui-org/material-ui)

[Github: react-desktop](https://github.com/gabrielbull/react-desktop)

[Github: react-bootstrap](https://github.com/react-bootstrap/react-bootstrap)

CSS Libraries:

[Github: emotion](https://github.com/emotion-js/emotion)

Icon Libraries:

[Github: react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

## Create React App

[Github](https://github.com/facebook/create-react-app)

[Documentation](https://create-react-app.dev/docs/getting-started)

**Scripts**

Inside the newly created project, you can run some built-in commands:

-   `npm start` Runs the app in development mode. Open `http://localhost:3000` to view it in the browser.
-   `npm test` Runs the test watcher in an interactive mode. By default, runs tests related to files changed since the last commit.
-   `npm run build` Builds the app for production to the build folder.
-   `npm run eject` Opy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) into your project as dependencies in `package.json`.

**Advanced Configuration**

You can adjust various development and production settings by setting environment variables in your shell or with `.env`.

[Reference](https://create-react-app.dev/docs/advanced-configuration)

| Variable                | Usage                                      |
| ----------------------- | ------------------------------------------ |
| `PORT`                  | Set the port be listened.                  |
| `CI`                    | Treat warnings as failures in the build.   |
| `DISABLE_ESLINT_PLUGIN` | Completely disable `eslint-webpack-plugin` |

## API Reference

### DOM Elements

`dangerouslySetInnerHTML` is React’s replacement for using `innerHTML` in the browser DOM.

```js
function createMarkup() {
  return {__html: 'First &middot; Second'};
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}
```

### Hooks

[Reference](https://reactjs.org/docs/hooks-intro.html)

-   `useState` \
     Returns a stateful value, and a function to update it.
    ```js
    const [state, setState] = useState(initialState);
    setState(newState);
    setState(prevState => {
        // Object.assign would also work
        return {...prevState, ...updatedValues};
    });
    ```
-   `useEffect` \
     The function passed to useEffect will run after the render is committed to the screen.
    ```js
    useEffect(didUpdate);
    useEffect(() => {
        const subscription = props.source.subscribe();
        return () => {
            // Clean up the subscription
            subscription.unsubscribe();
        };
    });
    ```
-   `useRef` \
     Returns a mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component.

    Keep in mind that `useRef` doesn’t notify you when its content changes. Mutating the `.current` property doesn’t cause a re-render.

-   `useDebugValue` \
     This function can be used to display a label for custom hooks in React DevTools.

## Libraries

```sh
npm i react-native-vector-icons                     # Customizable Icons for React Native with support for image source and full styling.   https://github.com/oblador/react-native-vector-icons#installation
npm i @blueprintjs/core@next                        # A React-based UI toolkit for the web                                                  https://github.com/palantir/blueprint
npm i @emotion/react                                # CSS-in-JS library designed for high performance style composition                     https://github.com/emotion-js/emotion
```

### MUI System

#### System

CSS utilities for rapidly laying out custom designs.

[Reference](https://mui.com/system/basics/)

```sh
npm i -D @mui/system @emotion/react @emotion/styled
```

**Border**

| Prop                                                                                    | Theme key                                                                                  |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `border` `borderTop` `borderLeft` `borderRight` `borderBottom`                          | `borders`                                                                                  |
| `borderColor` `borderTopColor` `borderRightColor` `borderBottomColor` `borderLeftColor` | <code>[palette](https://mui.com/customization/default-theme/?expand-path=$.palette)</code> |
| `borderRadius`                                                                          | <code>[shape](https://mui.com/customization/default-theme/?expand-path=$.shape)</code>     |

**Palette**

| Prop      | Theme key                                                                                  |
| --------- | ------------------------------------------------------------------------------------------ |
| `color`   | <code>[palette](https://mui.com/customization/default-theme/?expand-path=$.palette)</code> |
| `bgcolor` | <code>[palette](https://mui.com/customization/default-theme/?expand-path=$.palette)</code> |

**Shadows**

| Prop        | Theme key |
| ----------- | --------- |
| `boxShadow` | `shadows` |

**Sizing**

The sizing properties: `width`, `height`, `minHeight`, `maxHeight`, `minWidth`, and `maxWidth` are using the following custom transform function for the value:

```js
function transform(value) {
  return value <= 1 ? `${value * 100}%` : value;
}
```

**Spacing**

The props are named using the format `{property}{sides}`.

Where `property` is one of:

-   `m` - for classes that set margin
-   `p` - for classes that set padding

Where sides is one of:

-   `t` - for classes that set `margin-top` or `padding-top`
-   `b` - for classes that set `margin-bottom` or `padding-bottom`
-   `l` - for classes that set `margin-left` or `padding-left`
-   `r` - for classes that set `margin-right` or `padding-right`
-   `x` - for classes that set both `*-left` and `*-right`
-   `y` - for classes that set both `*-top` and `*-bottom`
-   blank - for classes that set a margin or padding on all 4 sides of the element

All property is affected by theme key <code>[spacing](https://mui.com/customization/default-theme/?expand-path=$.spacing)</code> .

Depending on the input and the theme configuration, the following transformation is applied:

-   input: `number` & theme: `number`: the prop value is multiplied by the theme value.

    ```js
    const theme = {
        spacing: 8,
    }

    <Box sx={{ m: -2 }} /> // margin: -16px;
    <Box sx={{ m: 0 }} /> // margin: 0px;
    <Box sx={{ m: 0.5 }} /> // margin: 4px;
    <Box sx={{ m: 2 }} /> // margin: 16px;
    ```

-   input: `number` & theme: `array`: the prop value is used as the array index.

    ```js
    const theme = {
        spacing: [0, 2, 3, 5, 8],
    }

    <Box sx={{ m: -2 }} /> // margin: -3px;
    <Box sx={{ m: 0 }} /> // margin: 0px;
    <Box sx={{ m: 2 }} /> // margin: 3px;
    ```

-   input: `number` & theme: `function`: the function is called with the prop value.

    ```js
    const theme = {
        spacing: value => value * 2,
    }

    <Box sx={{ m: 0 }} /> // margin: 0px;
    <Box sx={{ m: 2 }} /> // margin: 4px;
    ```

-   input: `string`: the prop value is passed as raw CSS value.

    ```js
    <Box sx={{ m: "2rem" }} /> // margin: 2rem;
    <Box sx={{ mx: "auto" }} /> // margin-left: auto; margin-right: auto;
    ```

#### Customization

**Theming**

`createTheme(options, ...args) => theme` \
Generate a theme base on the options received. Then, pass it as a prop to <code>[ThemeProvider](https://mui.com/customization/theming/#themeprovider)</code> .

-   `options: object` Takes an incomplete theme object and adds the missing parts.
-   `...args: object[]` Deep merge the arguments with the about to be returned theme.

**Palette**

The theme exposes the following palette colors (accessible under `theme.palette.`):

-   `primary` - used to represent primary interface elements for a user. It's the color displayed most frequently across your app's screens and components.
-   `secondary` - used to represent secondary interface elements for a user. It provides more ways to accent and distinguish your product. Having it is optional.
-   `error` - used to represent interface elements that the user should be made aware of.
-   `warning` - used to represent potentially dangerous actions or important messages.
-   `info` - used to present information to the user that is neutral and not necessarily important.
-   `success` - used to indicate the successful completion of an action that user triggered.

**Dark mode**

You can make the theme dark by setting `mode: 'dark'`.

```js
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
```

### emotion

[Github](https://github.com/emotion-js/emotion)

```sh
npm i @emotion/react
```

Place `/** @jsxImportSource @emotion/react */` at the top of JSX files.

```js
/** @jsxImportSource @emotion/react */
import { ThemeProvider } from '@emotion/react'

const theme = {
  colors: {
    primary: 'hotpink'
  }
}

render(
  <ThemeProvider theme={theme}>
    <div css={theme => ({ color: theme.colors.primary })}>
      some other text
    </div>
  </ThemeProvider>
)
```

[The css Prop](https://emotion.sh/docs/css-prop)

[Object Styles](https://emotion.sh/docs/object-styles)

Child Selectors

```js
    css={{
      color: 'darkorchid',
      '& .name': {
        color: 'orange'
      }
    }}
```

Media Queries

```js
    css={{
      color: 'darkorchid',
      '@media(min-width: 420px)': {
        color: 'orange'
      }
    }}
```

Composition

```js
import { css } from '@emotion/react'

const hotpink = css({
  color: 'hotpink'
})

const hotpinkHoverOrFocus = css({
  '&:hover,&:focus': hotpink
})

const hotpinkWithBlackBackground = css(
  {
    backgroundColor: 'black',
    color: 'green'
  },
  hotpink
)
```

### Blueprint

[Github](https://github.com/palantir/blueprint)

```sh
npm i @blueprintjs/core@next @blueprintjs/popover2@next
```

```sh
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";
```

Set dark mode.

```js
import { Classes } from "@blueprintjs/core";

// Add Classes.DARK to root component.
render(<div className={Classes.DARK}>
    {/* Components */}
</div>);
```

Enable focus management and remove the blue outline.

```js
import { FocusStyleManager } from "@blueprintjs/core";

FocusStyleManager.onlyShowFocusOnTabs();
```

**Components**

[Reference](https://blueprintjs.com/docs/versions/4/#core)

<style>
    .blueprint-components {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    .blueprint-components p {
        font-size: 10px;
        margin-bottom: 0;
    }
    .blueprint-components div {
        border: solid 1px;
        padding: 10px;
        border-radius: 2px;
    }
</style>

<div class="blueprint-components">
<div><a href="https://blueprintjs.com/docs/versions/4/#core/components/navbar">NavBar</a></div>
<div><a href="https://blueprintjs.com/docs/versions/4/#core/components/button">Button</a>
<p><code>disabled</code> Whether this action is non-interactive.</p>
<p><code>fill</code> Whether this button should expand to fill its container.</p>
<p><code>icon</code> Name of a Blueprint UI icon (or an icon element) to render before the text.</p>
<p><code>rightIcon</code> Name of a Blueprint UI icon (or an icon element) to render after the text.</p>
<p><code>intent</code> Visual intent color to apply to element.</p>
<p><code>minimal</code> Whether this button should use minimal styles.</p>
<p><code>outlined</code> Whether this button should use outlined styles.</p>
</div>
<div><a href="https://blueprintjs.com/docs/versions/4/#core/components/card">Card</a>
<p><code>elevation</code>  Controls the intensity of the drop shadow beneath the card.</p>
<p><code>interactive</code>  CWhether the card should respond to user interactions. If set to true, hovering over the card will increase the card's elevation and change the mouse cursor to a pointer.</p>
</div>
<div><a href="https://blueprintjs.com/docs/versions/4/#popover2-package/tooltip2">Tooltip2</a>
<p><code>content</code> The content that will be displayed inside of the tooltip.</p>
<p><code>hoverOpenDelay</code> The amount of time in milliseconds the tooltip should wait before opening after the user hovers over the trigger.</p>
</div>
<div><a href="https://blueprintjs.com/docs/versions/4/#popover2-package/popover2">Popover2</a>
<p><code>content</code> The content displayed inside the popover.</p>
</div>
<div><a href="https://blueprintjs.com/docs/versions/4/#core/components/text-inputs">Text inputs</a>
<p><code>value</code> Form value of the input, for controlled usage.</p>
<p><code>onChange</code> Change event handler. Use <code>event.target.value</code> for new value.</p>
<p><code>fill</code> Whether the component should take up the full width of its container.</p>
<p><code>intent</code> Visual intent color to apply to element.</p>
<p><code>round</code> Visual intent color to apply to element.</p>
</div>
<div><a href="https://blueprintjs.com/docs/versions/4/#core/components/dialog.dialog">Dialog</a>
<p><code>isOpen</code> Toggles the visibility of the overlay and its children.</p> 
<p><code>onClose</code> A callback that is invoked when user interaction causes the overlay to close.</p> 
<p><code>title</code> Title of the dialog.</p> 
<p><code>icon</code> Name of a Blueprint UI icon (or an icon element) to render in the dialog's header. Note that the header will only be rendered if <code>title</code> is provided.</p> 
</div>
</div>
<br>

**Toast**

[Reference](https://blueprintjs.com/docs/versions/4/#core/components/toast)

```ts
// toaster.ts
import { Position, Toaster } from "@blueprintjs/core";

/** Singleton toaster instance. Create separate instances for different options. */
export const AppToaster = Toaster.create({
    className: "recipe-toaster",
    position: Position.TOP,
});
```

```ts
// application.ts
import { Button } from "@blueprintjs/core";
import * as React from "react";
import { AppToaster } from "./toaster";

export class App extends React.PureComponent {
    render() {
        return <Button onClick={this.showToast} text="Toast please" />;
    }

    showToast = () => {
        // create toasts in response to interactions.
        // in most cases, it's enough to simply create and forget (thanks to timeout).
        AppToaster.show({ message: "Toasted." });
    }
}
```

`interface IToaster`

-   `clear: () => void` Dismiss all toasts instantly.
-   `dismiss: (key: string) => void` Dismiss the given toast instantly.
-   `getToasts: () => IToastOptions[]` Returns the props for all current toasts.
-   `show: (props: IToastProps, key?: undefined | string) => string` Shows a new toast to the user, or updates an existing toast corresponding to the provided key (optional). Returns the unique key of the toast.

`interface IToastProps`

-   `message` Message to display in the body of the toast.
-   `intent` Visual intent color to apply to element.
-   `timeout` Milliseconds to wait before automatically dismissing toast.

**Breadcrumbs**

[Reference](https://blueprintjs.com/docs/versions/4/#core/components/breadcrumbs)

```js
const { Breadcrumbs, IBreadcrumbProps, Icon } = "@blueprintjs/core";

const BREADCRUMBS: IBreadcrumbProps[] = [
    { href: "/users", icon: "folder-close", text: "Users" },
    { href: "/users/janet", icon: "folder-close", text: "Janet" },
    { icon: "document", text: "image.jpg" },
];

export class BreadcrumbsExample extends React.Component {
    public render() {
        return (
            <Breadcrumbs
                currentBreadcrumbRenderer={this.renderCurrentBreadcrumb}
                items={BREADCRUMBS}
             />
        );
    }
    private renderCurrentBreadcrumb = ({ text, ...restProps }: IBreadcrumbProps) => {
        // customize rendering of last breadcrumb
        return <Breadcrumb {...restProps}>{text} <Icon icon="star" /></Breadcrumb>;
    };
}
```

-   `items: BreadcrumbProps[]` All breadcrumbs to display. Breadcrumbs that do not fit in the container will be rendered in an overflow menu instead.

`BreadcrumbProps`

-   `text` Action text. Can be any single React renderable.
-   `onClick` Click event handler.

### react-native-vector-icons

[Github](https://github.com/oblador/react-native-vector-icons)

```sh
npm i react-native-vector-icons
```

```js
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;
```

### React DnD

Drag and Drop for React

[Github](https://github.com/react-dnd/react-dnd)

```sh
npm i react-dnd react-dnd-html5-backend
```

-   `useDrag` provides a way to wire your component into the DnD system as a _drag source_.

    **Parameters**

    -   `spec` A specification object or a function that creates a specification object.
    -   `deps` A dependency array used for memoization.

    **Return Value Array**

    -   `[0] - Collected Props` An object containing collected properties from the collect function. If no `collect` function is defined, an empty object is returned.
    -   `[1] - DragSource Ref` A connector function for the drag source. This must be attached to the draggable portion of the DOM.
    -   `[2] - DragPreview Ref` A connector function for the drag preview. This may be attached to the preview portion of the DOM.

    **Specification Object Members**

    -   `type` Required. This must be either a string or a symbol.
    -   `item` Required (_object_ or _function_).
        -   When this is an object, it is a plain JavaScript object describing the data being dragged.
        -   When this is a function, it is fired at the beginning of the drag operation and returns an object representing the drag operation. If null is returned, the drag operation is cancelled.
    -   `previewOptions` Optional. A plain JavaScript object describing drag preview options.
    -   `options` Optional. A plain object optionally containing any of the following properties:
        -   `dropEffect` Optional: The type of drop effect to use on this drag.
    -   `end(item, monitor)` Optional. When the dragging stops, `end` is called. For every `begin` call, a corresponding `end` call is guaranteed.
    -   `canDrag(monitor)` Optional. Use it to specify whether the dragging is currently allowed.
    -   `collect` Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

-   `useDrop` provides a way for you to wire in your component into the DnD system as a _drop target_.

    **Parameters**

    -   `spec` A specification object or a function that creates a specification object.
    -   `deps` A dependency array used for memoization.

    **Return Value Array**

    -   `[0] - Collected Props` An object containing collected properties from the collect function. If no `collect` function is defined, an empty object is returned.
    -   `[1] - DropTarget Ref` A connector function for the drop target. This must be attached to the drop-target portion of the DOM.

    **Specification Object Members**

    -   `accept` Required. A string, a symbol, or an array of either.
    -   `options`: Optional. A plain object.
    -   `drop(item, monitor)`: Optional. Called when a compatible item is dropped on the target.
    -   `hover(item, monitor)` Optional. Called when an item is hovered over the component. You can check `monitor.isOver({ shallow: true })` to test whether the hover happens over just the current target, or over a nested one.
    -   `canDrop(item, monitor)` Optional. Use it to specify whether the drop target is able to accept the item.
    -   `collect` Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

### Sortable

Reorderable drag-and-drop lists for modern browsers and touch devices. No jQuery or framework required.

[Github](https://github.com/SortableJS/Sortable)

### dragula

Drag and drop so simple it hurts

[Github](https://github.com/bevacqua/dragula)

### Redux

[Github](https://github.com/reduxjs/redux)

```sh
npm i @reduxjs/toolkit react-redux
```

[Redux Reference](https://redux.js.org/api/api-reference)

[React Redux Reference](https://react-redux.js.org/api/hooks)

[Redux Toolkit Reference](https://redux-toolkit.js.org/api/configureStore)

[When (and when not) to reach for Redux](https://changelog.com/posts/when-and-when-not-to-reach-for-redux)

[Tutorial](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)

**Redux Terms and Concepts**

-   An **action** is a plain JavaScript object that has a `type` field. You can think of an action as an event that describes something that happened in the application.

    The `type` field should be a string that gives this action a descriptive name. We usually write that type string like `"domain/eventName"`.

    An action object can have other fields with additional information about what happened. By convention, we put that information in a field called `payload`.

-   An **action creator** is a function that creates and returns an action object.
-   A **reducer** is a function that receives the current `state` and an `action` object, decides how to update the state if necessary, and returns the new state: `(state, action) => newState`. You can think of a reducer as an event listener which handles events based on the received action (event) type.

    Reducers must _always_ follow some specific rules:

    -   They should only calculate the new state value based on the `state` and `action` arguments
    -   They are not allowed to modify the existing `state`.
    -   They must not do any asynchronous logic, calculate random values, or cause other "side effects"

-   The current Redux application state lives in an object called the **store**.

    The store is created by passing in a reducer, and has a method called `getState` that returns the current state value.

-   The Redux store has a method called `dispatch`. The only way to update the state is to call `store.dispatch()` and pass in an action object.

    You can think of dispatching actions as "triggering an event" in the application.

-   **Selectors** are functions that know how to extract specific pieces of information from a store state value.

#### Redux

[Reference](https://redux.js.org/api/api-reference)

-   <code>[createStore()](https://redux.js.org/api/createstore)</code> Creates a Redux [store](https://redux.js.org/api/store) that holds the complete state tree of your app. There should only be a single store in your app.

    -   `reducer` _(Function)_ A [reducing function](https://redux.js.org/understanding/thinking-in-redux/glossary#reducer) that returns the next [state tree](https://redux.js.org/understanding/thinking-in-redux/glossary#state), given the current state tree and an [action](https://redux.js.org/understanding/thinking-in-redux/glossary#action) to handle.
    -   `preloadedState?` _(any)_: The initial state.
    -   `enhancer?` _(Function)_: The store enhancer.

    -   Return: <code>[Store](https://redux.js.org/api/store)</code> An object that holds the complete state of your app.

-   <code>[combineReducers()](https://redux.js.org/api/combinereducers)</code> turns an object whose values are different reducing functions into a single reducing function you can pass to `createStore`.

    The resulting reducer calls every child reducer, and gathers their results into a single state object. The state produced by `combineReducers()` namespaces the states of each reducer under their keys as passed to `combineReducers()`

    -   `reducers` _(Object)_: An object whose values correspond to different reducing functions that need to be combined into one.
    -   Return: _(Function)_: A reducer that invokes every reducer inside the `reducers` object, and constructs a state object with the same shape.

    Any reducer passed to `combineReducers` must satisfy these rules:

    -   For any action that is not recognized, it must return the `state` given to it as the first argument.
    -   It must never return `undefined`.
    -   If the state given to it is `undefined`, it must return the initial state for this specific reducer.

`Store`

-   `getState()`

    Returns the current state tree of your application. It is equal to the last value returned by the store's reducer.

-   `dispatch(action)`

    Dispatches an action. This is the only way to trigger a state change.

    -   `action` A plain object describing the change that makes sense for your application.

        Actions must have a `type` field that indicates the type of action being performed.

#### Redux Toolkit

[Reference](https://redux-toolkit.js.org/api/configureStore)

-   <code>[configureStore()](https://redux-toolkit.js.org/api/configureStore)</code> wraps `createStore` to provide simplified configuration options and good defaults.

    `configureStore` accepts a single configuration object parameter, with the following options:

    -   `reducer: Reducer<S, A> | ReducersMapObject<S, A>`

        If this is a single function, it will be directly used as the root reducer for the store.

        If it is an object of slice reducers, like {users : usersReducer, posts : postsReducer}, configureStore will automatically create the root reducer by passing this object to the Redux `combineReducers` utility.

    -   `devTools?: boolean | DevToolsOptions`

        If this is a boolean, it will be used to indicate whether `configureStore` should automatically enable support for [the Redux DevTools browser extension](https://github.com/zalmoxisus/redux-devtools-extension).

        If it is an object, then the DevTools Extension will be enabled, and the options object will be passed to `composeWithDevtools()`. See the DevTools Extension docs for [EnhancerOptions](https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md#windowdevtoolsextensionconfig) for a list of the specific options that are available.

        -   `actionsBlacklist` \
             `actionsWhitelist` \
             _string or array of strings as regex_ - actions types to be hidden / shown in the monitors (while passed to the reducers). If `actionsWhitelist` specified, `actionsBlacklist` is ignored.

-   <code>[createReducer()](https://redux-toolkit.js.org/api/createReducer)</code> lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements.

    Usage with the "Builder Callback" Notation

    -   `initialState: State | (() => State)` The initial state that should be used when the reducer is called the first time.
    -   `builderCallback: (builder: Builder) => void` A callback that receives a `builder` object to define case reducers via calls to `builder.addCase(actionCreatorOrType, reducer)`.

        -   `builder.addCase` Adds a case reducer to handle a single exact action type.
            -   `actionCreator` Either a plain action type string, or an action creator generated by `createAction` that can be used to determine the action type.
            -   `reducer` The actual case reducer function.
        -   `builder.addMatcher` Allows you to match your incoming actions against your own filter function instead of only the `action.type` property.

            If multiple matcher reducers match, all of them will be executed in the order they were defined in - even if a case reducer already matched.

            -   `matcher` A matcher function.
            -   `reducer` The actual case reducer function.

        -   `builder.addDefaultCase`
            -   `reducer` The fallback "default case" reducer function.

    Usage with the "Map Object" Notation.

    This overload accepts an object where the keys are string action types, and the values are case reducer functions to handle those action types.

    -   `initialState: State | (() => State)`
    -   `actionsMap` An object mapping from action types to case reducers, each of which handles one specific action type.
    -   `actionMatchers` An array of matcher definitions in the form `{matcher, reducer}`
    -   `defaultCaseReducer`

-   <code>[createSlice()](https://redux-toolkit.js.org/api/createSlice)</code> accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.

    -   `initialState` The initial state value for this slice of state.
    -   `name` A string name for this slice of state. Generated action type constants will use this as a prefix.
    -   `reducers` An object containing Redux "case reducer" functions (functions intended to handle a specific action type, equivalent to a single case statement in a switch).

        This object will be passed to `createReducer`, so the reducers may safely "mutate" the state they are given.

    `createSlice` will return an object that looks like:

    ```ts
    {
        name : string,
        reducer : ReducerFunction,
        actions : Record<string, ActionCreator>,
        caseReducers: Record<string, CaseReducer>.
        getInitialState: () => State
    }
    ```

    Each function defined in the `reducers` argument will have a corresponding action creator generated using `createAction` and included in the result's `actions` field using the same function name.

    The generated `reducer` function is suitable for passing to the Redux `combineReducers` function as a "slice reducer".

-   <code>[createAction()](https://redux-toolkit.js.org/api/createAction)</code> takes an action type and returns an action creator for that type.

    ```ts
    function createAction<P = void, T extends string = string>(type: T): PayloadActionCreator<P, T>;
    function createAction<PA extends PrepareAction<any>, T extends string = string>(type: T, prepareAction: PA): PayloadActionCreator<ReturnType<PA>['payload'], T, PA>;
    ```

-   `getDefaultMiddleware()`

    Returns an array containing the default list of middleware.

    By default, `configureStore` adds some middleware to the Redux store setup automatically.

    **Included Default Middleware**

    Development

    -   [Immutability check middleware](https://redux-toolkit.js.org/api/immutabilityMiddleware): deeply compares state values for mutations.
    -   [Serializability check middleware](https://redux-toolkit.js.org/api/serializabilityMiddleware): a custom middleware created specifically for use in Redux Toolkit.
    -   [redux-thunk](https://github.com/reduxjs/redux-thunk).

    Production

    -   [redux-thunk](https://github.com/reduxjs/redux-thunk).

#### React Redux

[Reference](https://react-redux.js.org/api/hooks)

-   `useSelector()`

    Allows you to extract data from the Redux store state, using a selector function.

    The selector will be run whenever the function component renders.

    `useSelector()` will also subscribe to the Redux store, and run your selector whenever an action is dispatched.

    When an action is dispatched to the Redux store, `useSelector()` only forces a re-render if the selector result appears to be different than the last result. As of v7.1.0-alpha.5, the default comparison is a strict `===` reference comparison.

-   `useDispatch()`

    This hook returns a reference to the `dispatch` function from the Redux store.

#### Redux Thunk

[Github](https://github.com/reduxjs/redux-thunk)

[Reference](https://redux.js.org/usage/writing-logic-thunks)

Using thunks requires the [redux-thunk middleware](https://github.com/reduxjs/redux-thunk) to be added to the Redux store as part of its configuration.

Thunks are [the standard approach for writing async logic in Redux apps](https://redux.js.org/style-guide/style-guide#use-thunks-for-async-logic), and are commonly used for data fetching.

A **thunk function** is a function that accepts two arguments: the Redux store `dispatch` method, and the Redux store `getState` method. Thunk functions are not directly called by application code. Instead, they are passed to `store.dispatch()`.

```js
const thunkFunction = (dispatch, getState) => {
  // logic here that can dispatch actions or read state
}

store.dispatch(thunkFunction);
```

### react-hotkeys-hook

React hook for using keyboard shortcuts in components. This is a hook version for the [hotkeys](https://github.com/jaywcjlove/hotkeys) package.

[Github](https://github.com/JohannesKlauss/react-hotkeys-hook)

```sh
npm i react-hotkeys-hook
```

```js
export const ExampleComponent = () => {
  const [count, setCount] = useState(0);
  useHotkeys('ctrl+k', () => setCount(prevCount => prevCount + 1));

  return (
    <p>
      Pressed {count} times.
    </p>
  );
};
```

Function `useHotkeys` signature:

```ts
function useHotkeys<T extends Element>(
  keys: string,
  callback: (event: KeyboardEvent, handler: HotkeysEvent) => void,
  options: Options = {},
  deps: any[] = []
): React.MutableRef<T | null>
```

Arguments:

-   `keys` Set the keystrokes we want the hook to listen to. See [this guide](https://github.com/jaywcjlove/hotkeys/#defining-shortcuts) of the underlying hotkeys package for all possible shortcuts.
-   `callback`

### React-Bootstrap

Bootstrap components built with React

[Github](https://github.com/react-bootstrap/react-bootstrap)

### React-Grid-Layout

A draggable and resizable grid layout with responsive breakpoints, for React.

[Github](https://github.com/react-grid-layout/react-grid-layout)

```sh
npm i react-grid-layout
```

### React-Resizable

A simple React component that is resizable with a handle.

[Github](https://github.com/react-grid-layout/react-resizable)

```sh
npm i react-resizable
```

### react-sizeme

Make your React Components aware of their width and height!

[Github](https://github.com/ctrlplusb/react-sizeme)

### formik

Build forms in React, without the tears

[Github](https://github.com/jaredpalmer/formik)

### react-textarea-autosize

`<textarea />` component for React which grows with content

[Github](https://github.com/Andarist/react-textarea-autosize)

### react-markdown

Markdown component for React

[Github](https://github.com/remarkjs/react-markdown)

### react-rnd

A resizable and draggable component for React.

[Github](https://github.com/bokuweb/react-rnd)

### react-copy-to-clipboard

Copy-to-clipboard React component

[Github](https://github.com/nkbt/react-copy-to-clipboard)

```tsx
<CopyToClipboard text={this.state.value}
  onCopy={() => this.setState({copied: true})}>
  <span>Copy to clipboard with span</span>
</CopyToClipboard>
```

### react-router

[Github](https://github.com/remix-run/react-router)

## Miscellaneous

### Disable ESLint

Set environment variable `DISABLE_ESLINT_PLUGIN`.

```json
// package.json
{
  // ...
  "scripts": {
    "start": "DISABLE_ESLINT_PLUGIN=true react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
}
```

### Errors

```sh
$ npx create-react-app web
Need to install the following packages:
  create-react-app
Ok to proceed? (y) y

You are running `create-react-app` 4.0.3, which is behind the latest release (5.0.0).

We no longer support global installation of Create React App.

Please remove any global installs with one of the following commands:
- npm uninstall -g create-react-app
- yarn global remove create-react-app

The latest instructions for creating a new app can be found here:
https://create-react-app.dev/docs/getting-started/
```

Solution:

```sh
npx clear-npx-cache
npx create-react-app web
```
