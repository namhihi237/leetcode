/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj.hasOwnProperty(nums[i])) {
      delete obj[nums[i]];
    } else {
      obj[nums[i]] = true
    }
  }

  return +Object.keys(obj)[0]
};