'use strict';

const data = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  3.14, null, undefined, 42n, Symbol('id'), {}, [],
  () => {}, 'JavaScript', NaN, 0, '', Infinity, new Date(),
];

const counts = {
  number: 0,
  string: 0,
  boolean: 0,
  bigint: 0,
  symbol: 0,
  undefined: 0,
  object: 0,
  function: 0,
};

for (const item of data) {
  const type = typeof item;
  counts[type]++;
}

console.dir(counts);
