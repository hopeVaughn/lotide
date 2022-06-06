const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const items of allItems) {
    if (itemsToCount[items]) {
      if (!results[items]) {
        results[items] = 1;
      } else if (results[items]) {
        results[items] += 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;