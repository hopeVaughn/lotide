// // --------------------------------------------------------------------------
// // Test cases for flatten
// console.log(flatten([1, 2, [3, 4], 5, [6]]));
// console.log(flatten(['a', 'b', [3, 4]]));
// console.log(flatten([['a'], 'b', [3, 4], ['c', 'd']]));

// // -------------------------------------------------------------------------
// // Test case with assertEqualsArray

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
// assertArraysEqual(flatten([['a'], 'b', [3, 4], ['c', 'd']]), [
//   'a',
//   'b',
//   3,
//   4,
//   'c',
//   'd',
// ]);
// assertArraysEqual(flatten(['a', 'b', [3, 4]], ['a', 'b', 3, 4]));