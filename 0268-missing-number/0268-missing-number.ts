function missingNumber(nums: number[]): number {
    return nums.reduce((a,b) => a - b, nums.length * (nums.length + 1) / 2);
};
