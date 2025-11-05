const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let result = '';
  let charCount = 1;

  for (let i = 0; i < str.length; i++) {
    if (i === str.length - 1 || str[i] !== str[i + 1]) {
      result += (charCount > 1 ? charCount : '') + str[i];
      charCount = 1;
    } else {
      charCount++; 
    }
  }

  return result;
}

module.exports = {
  encodeLine
};
