const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(
      `🛑🛑🛑 Assertion Failed: [array1] === [array2] = ${expected}`
    );
  }

  return console.log(
    `🟢🟢🟢 Asstertion Passed: [array1] === [array2] = ${expected}`
  );
};

// const eqArrays = function (array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }

//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

const without = function(source, itemsToRemove) {
  // declaring a new variable then filtering the source parameter array
  const result = source.filter(
    (e) =>
      // only returning elements not (!falsey) included in the itemsToRemove parameter array
      !itemsToRemove.includes(e)
  );
  // testing the source parameter array to check for mutibility
  console.log(source);
  console.log(itemsToRemove);
  // returning the new result array
  return result;
};

// assertEqual input for testing

// Tests for the without() function

console.log(without([1, 2, 3, 4], [1, 3]));
console.log(typeof param1);
console.log(without(['hello', 'world', 'lighthouse'], ['world']));
console.log(without(['hey', 'there', 42, undefined, 'buds'], [undefined, 42]));
console.log(without([123, '14', '987', NaN, 42], [NaN, 123]));
