'use strict';

const countTypesInArray = (arr) => {
  const counts = {};
  for (const item of arr) {
    const type = typeof item;
    counts[type] = (counts[type] || 0) + 1;
  }
  return counts;
};

module.exports = { countTypesInArray };
