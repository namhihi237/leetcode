/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    nums = nums.sort((a,b) => a - b);
    console.log(nums)
    for (let i = 0; i < nums.length - 1; i+=2) {
      [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
    }
    return nums;
};