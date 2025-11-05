const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const fixed = {};
  
  const sorted = arr.filter((element, index) => {
    if (element !== -1) {
      return element
    } else {
      fixed[index] = -1;
      return false;
    }
  }).sort((a, b) => a - b);

  const result = [];
  let sortedIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (fixed.hasOwnProperty(i)) {
      result.push(-1);
    } else {
      result.push(sorted[sortedIndex]);
      sortedIndex++;
    }
  }

  return result;
}

module.exports = {
  sortByHeight
};
