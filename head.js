const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  return `🟢🟢🟢 Asstertion Passed: ${actual} === ${expected}`;
};

const head = function(array) {
  const value = array[0];
  if (value === undefined) {
    return;
  }
  return value;
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
assertEqual(head([3]), 3);
assertEqual(head([]), 5);
