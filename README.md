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

- `assertEqual.js`: Colourful replacement for the assert method
- `head.js`: Returns the 0 index of an array and tests it for equality
- `tail.js`: Returns a new array from the index 1 of a given array and tests it for equality
