/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
 let jumps = 0, maxJump = 0, curEnd = 0;
 for (let i = 0; i < nums.length - 1; i++) {
   maxJump = Math.max(maxJump, i + nums[i]);
   
   if (i == curEnd) {
     curEnd = maxJump;
     jumps++;    
   }
 }
  
  return jumps;
};