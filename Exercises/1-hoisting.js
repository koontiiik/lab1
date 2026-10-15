'use strict';

const fn = () => {
  const result = double(21);
  function double(x) {
    return x * 2;
  }
  return result;
};

module.exports = { fn };
