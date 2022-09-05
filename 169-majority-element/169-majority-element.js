/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums = []) {
  let unique = {};
  for (let i = 0; i < nums.length; i++) {
    if (unique.hasOwnProperty(nums[i])) {
      unique[nums[i]] = unique[nums[i]] + 1;
    } else unique[nums[i]] = 1;
  }

  for (let item in unique) {
    if (unique[item] >= nums.length / 2) {
      return item;
    }
  }

  return -1;
};
