# Working with Types in JavaScript

At facebook they extended the JavaScript language with types, their tool is
called flow and checks your codebase for misused types.

There are a few challanges that you can tackle easily with JavaScript, types are
ain't one of them. Types are essential when working with already large (and still
growing) codebase. It helps you catch bugs even before they appear, and allowing
you to focus more on the business logic, instead of the quirks of the language
itself. I have a simple solution which won't be in your way writing your code.

## What are types?

In computer science and computer programming, a data type or simply type is a classification identifying one of various types of data, such as real, integer or Boolean, that determines the possible values for that type; the operations that can be done on values of that type; the meaning of the data; and the way values of that type can be stored.

- Categorizable data

## Programming errors, runtime errors

- Programming error:

function add (a, b) {
  if (typeof a === "Number") {
    throw new Error('awdhbawhdab')
  }
  return a + b
}

add('pear', 1) // pear1

You misuse a function what was not intended to call in such a way.

- Runtime error:

  - Runtime errors are all other errors. Parameters that come from the outside
    world, runtime and are not checked by the compiler, gets passed into a method
    in a wrong way and
    - https://encrypted.google.com/search?q=BOOOOM&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjl1JOtuOHMAhUGIpoKHQwyDEEQ_AUIBygB&biw=1895&bih=927

Types let you catch PROGRAMMING errors (key takeaway here!)

Why do I need them?

- BUT without types my code is higher level and more general. Bullshit. You
  don't want to write your lib as if it handled multiple types, then your
  function is not doing ONE THING. And thats bad and you should feel bad.
  - https://imgflip.com/i/14avkn

OFC you don't do this.
BUT you'll use this:
Speaking of clean code, it's pretty ugly right?

https://github.com/RisingStack/trace-service-sdk/blob/master/lib/TraceServiceEndpoint.js

Documentation:

SHOULD BE TIED TO THE CODE, otherwise, it will be eventually consistent (ehm)

- We tried, seriously

- JSDoc

- Simple annotation

- Errors
  - TypeError
  - ParameterError

## JavaScript cannot do this by itself, but compiled to JS languages can.

### TypeScript:

- Made by Microsoft, inspired by C#

- Different language, semantically different than javascript (ES2015)

- Compiled code changes: YOU DON'T KNOW WHAT IS RUNNING

### FLOW

- Flow is not a language it's still JavaScript (Compatible with ES2015)

- Typed additions to an existing language

The goal of Flow is to find errors in JavaScript code with little programmer effort. Flow relies heavily on type inference to find type errors even when the program has not been annotated - it precisely tracks the types of variables as they flow through the program.

They FLOW through get it right?

Remember me complaining about no flow stuff for third party libs?

http://definitelytyped.org/

BUT WAIT THAT'S TYPESCRIPT, OMG FLOW WORKS WITH TS

expect(eval('mind === blown')).to.be.true // true

So apparently they were smart enough...
