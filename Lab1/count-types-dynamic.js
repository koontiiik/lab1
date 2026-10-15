'use strict';

const data = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  3.14, null, undefined, 42n, Symbol('id'), {}, [],
  () => {}, 'JavaScript', NaN, 0, '', Infinity, new Date(),
];

const counts = {};

for (const item of data) {
  const type = typeof item;
  if (counts[type] === undefined) {
    counts[type] = 0;
  }
  counts[type]++;
}

console.dir(counts);
