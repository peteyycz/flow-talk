# Working with Types in JavaScript

At facebook they extended the JavaScript language with types, their tool is
called flow and checks your codebase for misused types.

There are a few challanges that you can tackle easily with JavaScript, types are
ain't one of them. Types are essential when working with already large (and still
growing) codebase. It helps you catch bugs even before they appear, and allowing
you to focus more on the business logic, instead of the quirks of the language
itself. I have a simple solution which won't be in your way writing your code.

## What are types?

In programming, a data type is a classification, identifying one of various types of data, such as real, integer or Boolean, that determines the possible values for that type; the operations that can be done on values of that type; the meaning of the data; and the way values of that type can be stored.

var a = 2 // a will be an integer
var b = 'budapestjs' // will be a string

- Categorizable data int a, int b, string c
a and b are falling to the same category

- Create functions that act on a specific type

## Types of typesystems

### Statically Typed

*This means that the compiler has to figure out what is what, meaning the
programmer has to specify the wanted type for a variable every time*

- COMPILATION
- Burden of typing variable types everytime might lead to
  - DiceRollerCreatorFactory factory = new DiceRollerCreatorFactory()

```C#
int a = 2
int b = 2
int c = a + b
```

*But you'll be more aware of what you're actually trying to do when you're
specifying the types*

### Dynamically Typed

*This means that there is no compilation process is involved, and the types will
be figured out at runtime*

- Allows the programmer to be less distracted from the flow of the program to
  the implementation details
- Allows more programming errors

```
var a = 2 // int
var b = 2 // int
var c = 2 + 1 // int
```

## Errors?? What kind of errors

*There are two main type of errors that we'll have to talk about to make things
  a little bit more clear*

- Programming errors
- Runtime errors

### Programming error:

function add (a, b) {
  return a + b
}

add('pear', 1) // pear1

You misuse a function what was not intended to call in such a way.

### Runtime error:

All else :D

*Runtime errors are all other errors. Parameters that come from the outside
world, runtime and are not checked by the compiler, gets passed into a method
in a wrong way and*

**Types let you catch PROGRAMMING errors (key takeaway here!)**

Why do I need them?

- BUT without types my code is higher level and more general. Bullshit. You
  don't want to write your lib as if it handled multiple types, then your
  function is not doing ONE THING. And thats bad and you should feel bad.
  - https://imgflip.com/i/14avkn

OFC you don't do this.
BUT you'll use this:
Speaking of clean code, it's pretty ugly right?

https://github.com/RisingStack/trace-service-sdk/blob/master/lib/TraceServiceEndpoint.js

*Enough about errors, I'm sure all of you people see enough of them during work
hours*

## Documentation:

*We need to make sure our code is well documented, to make other people's work
with the same code a pleasure and not just pain.*

SHOULD BE TIED TO THE CODE, otherwise, it will be eventually inconsistent

- We tried, seriously

- Simple annotation

/**
 * This is a book that has a title and author
 */
function Book(title, author) {
}

- JSDoc

/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {
}

## JavaScript cannot do this by itself, but compiled to JS languages can.

### TypeScript:

- Made by Microsoft, inspired by C#

- Different language, semantically different than javascript (ES2015)

- Compiled code changes: YOU DON'T KNOW WHAT IS RUNNING (ofc you can check but
  who has time for that)

### FLOW

- Flow is not a language it's still JavaScript (Compatible with ES2015)

- Typed additions to an existing language

The goal of Flow is to find errors in JavaScript code with little programmer effort. Flow relies heavily on type inference to find type errors even when the program has not been annotated - it precisely tracks the types of variables as they flow through the program.
*They FLOW through get it right?*

*My only problem with flow that you'll need the type definitions for every third
party library that you use to make it really efficient*

http://definitelytyped.org/ to the rescue

BUT WAIT THAT'S TYPESCRIPT, OMG FLOW WORKS WITH TS
