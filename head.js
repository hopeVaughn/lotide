const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`🟢🟢🟢 Asstertion Passed: [${actual}] === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== ${expected}`);
  }
};

const head = function (array) {
  const value = array[0];
  if (value === undefined || value.length === 0) {
    return undefined;
  }
  return value;
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
assertEqual(head([3]), 3);
assertEqual(head([]), 5);
