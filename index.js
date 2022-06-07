

const eqObjects = require('./eqObjects');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqArrays = require('./eqArrays');
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const without = require('./without');
const takeUntil = require('./takeUntil');
const map = require('./map');
const letterPositions = require('./letterPositions');
const flatten = require('./flatten');
const findKey = require("./findKey");
const findKeyByValue = require('./findKeyByValue');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');






module.exports = {
  assertObjectsEqual: assertObjectsEqual,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  eqObjects: eqObjects,
  eqArrays: eqArrays,
  head: head,
  tail: tail,
  middle: middle,
  without: without,
  takeUntil: takeUntil,
  map: map,
  letterPositions: letterPositions,
  flatten: flatten,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  countOnly: countOnly,
  countLetters: countLetters,
};

