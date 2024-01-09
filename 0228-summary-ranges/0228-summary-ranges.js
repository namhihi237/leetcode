/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let startRange = nums[i];
        while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
            i++;
        }
        
        result.push(startRange === nums[i] ? startRange.toString() : `${startRange}->${nums[i]}`);
    }
    return result;
};