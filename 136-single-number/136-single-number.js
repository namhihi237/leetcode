/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (nums.length === 0) return 0;
  let result = nums[0];
  for (var i = 1; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
};