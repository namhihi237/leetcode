/**
 * @param {number[]} nums
 * @return {boolean}

 */
var canJump = function(nums) {
    let reach  = 0;
    console.log(nums.length)
    for (let i = 0; i <= reach; i++) {
      reach = Math.max(reach, i+ nums[i])
      console.log(reach, i)
      if (reach >= nums.length - 1) {
          console.log(reach, i , nums[i])
         return true;
      }
    }
  return false;
};