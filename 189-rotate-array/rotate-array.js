/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let n = nums.length;
  k = k % n;
  let newArr = [...nums.slice(n-k),...nums.slice(0,n-k)];

  for (let i=0; i<n;i++){
    nums[i] = newArr[i]
  }
};