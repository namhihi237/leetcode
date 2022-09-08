/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums = [], target) {
  if (target < nums[0]) return 0;
  else if (target > nums[nums.length - 1]) return nums.length;

  for (var i = 0; i < nums.length; i++) {
    if (target == nums[i]) return i;
    else if (target > nums[i] && target < nums[i + 1]) return i + 1;
  }
};