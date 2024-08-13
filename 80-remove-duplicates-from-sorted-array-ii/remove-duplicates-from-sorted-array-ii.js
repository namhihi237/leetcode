/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    for (let n of nums) {
      if (i == 0 || i == 1 || nums[i-2] !== n) {
        nums[i] = n;
        i++;
      }
    }
  return i;
};