# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me, Hope! as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @hopevaughn/lotide`

**Require it:**

`const _ = require('@hopevaughn/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertEqual.js`: Colourful replacement for the assert method.
- `head.js`: Returns the 0 index of an array and tests it for equality.
- `tail.js`: Returns a new array from the index 1 of a given array and tests it for equality.
- `eqArrays.js`: Takes in two arrays and returns true or false, based on a perfect match.
- `assertArraysEqual.js`: Takes in two arrays and will console.log and appropriate message to the console.
- `without.js`: Returns a subset of a given array, removing unwanted elements.
- `flatten.js`: takes in an array containing elements including nested arrays of elements, and returns a 'flattened' version of the array.
- `middle.js`: Takes in an array and returns the middle-most element(s) of the given array.
- `countOnly.js`: Takes an array and an object. It will return an object containing counts of everything that input object lists.
- `countLetters.js`: Takes in a sentence (as a tring) and then returns a count of each of the letters in that sentence.
- `letterPositions.js`: Returns all the indices (sero based positions) in the string where each charater is found.
- `findKeyByValue.js`: Takes in an object and a value then returns the first key which contains the given value. If no key with that given value is found, then it returns undefined.
- `eqObjects.js`: Takes in twi objects and returns true or false, based on a perfect match.
- `assertObjectsEqual.js`: Take in two objects and will console.log an appropriate message to the console.
- `map.js`: Returns a new array based in the results of the callback function.
- `takeUntil.js`: Collects items from a provded array untill the callback provided returns a truthy value.
- `findKey.js`: Takes in an object and a callback then scans the object and returns the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.
