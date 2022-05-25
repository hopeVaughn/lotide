const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return console.log(`🟢🟢🟢 Asstertion Passed: ${actual} === ${expected}`);
};

const findKey = function(obj, cb) {
  let empty = '';
  for (const ele in obj) {
    if (cb(obj[ele])) {
      empty = ele;
      return empty;
    }
  }
  return undefined;
};

const result1 = findKey(
  {
    Leo: { animal: 'Gecko' },
    Hiro: { animal: 'Dog' },
    Prettyboi: { animal: 'Cockateil' },
    Cuddles: { animal: 'Snake' },
    Sassy: { animal: 'Dog' },
    Puppy: { animal: 'Cat' },
    Ezekial: { animal: 'Cat' },
  },
  (e) => e.animal === 'Cat'
);

const result2 = findKey(
  {
    Hilton: { stars: 3 },
    Empress: { stars: 2 },
    HelmsInn: { stars: 5 },
    Motel6: { stars: 2 },
    Trump: { stars: 0 },
    LongView: { stars: 3 },
  },
  (e) => e.stars === 5
);

assertEqual(result1, 'Puppy');
assertEqual(result2, 'HelmsInn');
