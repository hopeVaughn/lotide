const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return console.log(`🟢🟢🟢 Asstertion Passed: ${actual} === ${expected}`);
};

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  // iterate through the input provided in the allItems parameter
  for (const items of allItems) {
    // if the object itemsToCount object contains the iterative value found in items and if itemsToCounts key:value is true the execute the code
    if (itemsToCount[items]) {
      // if the results object does not contain the iterative values of items add the key of iterative item with a value of 1
      if (!results[items]) {
        results[items] = 1;
        // else if the results object already contains the iterative value key of items add 1 to any of the key:values that occure more then once
      } else if (results[items]) {
        results[items] += 1;
      }
    }
  }
  // return the object results with updated data
  return results;
};

// ---------------------------------------

// test case set up

const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe',
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1['Jason'], 1);
assertEqual(result1['Karima'], undefined);
assertEqual(result1['Fang'], 2);
assertEqual(result1['Agouhanna'], undefined);
