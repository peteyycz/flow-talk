'use strict'
// @flow

const myNumber = 2
// comment this back so it fails
// const myFirstString: number = 'seawdad' // OMG TYPE ERROR

const mySecondString: string = '123'
const myBoolean: boolean = true

type MyFirstType = {
  myProp: string
}

const myFirstThing: MyFirstType = {
  myProp: 'it\'s so great to have types'
}

const mySecondThing: MyFirstType = {
  myProp: 'it\'s still great',
  butThis: 'might get confusing'
}

/* Class example */

type MyMethodOption = {
  whatever: string,
  optionalWhatever?: number
}

class MyClass {
  myProp: number;

  constructor (myProp: number) {
    this.myProp = myProp
  }

  myMethod (option: MyMethodOption): number {
    if (option.optionalWhatever) {
      option.optionalWhatever.toString()
    }
    if (option.whatever === 'wtf') {
      return 1
    }

    return 0
  }
}

const myInstance = new MyClass(1)

/* Function example */

// change to OPTIONAL VALUE
function myAwesomeFunction (input: MyFirstType): boolean {
  // input.myProp
  if (input) {
    console.log('dude OFC It\'s gonna be there it HAS A FUCKIN TYPE BRO')
    return true
  }

  return false
}

/*
 * Change this to number to prove the almightyness (i just made that up) of this
 * lib
*/
/* Disjoint union type whatever example */

type BinaryTree =
  { kind: "leaf", value: number } |
  { kind: "branch", left: BinaryTree, right: BinaryTree }

const leaf: BinaryTree = { kind: 'leaf', value: 1 }

module.exports.myAwesomeFunction = myAwesomeFunction
