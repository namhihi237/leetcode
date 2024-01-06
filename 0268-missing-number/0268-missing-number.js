var missingNumber = function(nums) {
    const sorted = nums.sort((a,b) => a - b);
    if (sorted[0] !== 0) return 0;

    for (let i = 0; i < sorted.length -1; i++) {
      if (sorted[i] + 1 !== sorted[i + 1]) {
        return sorted[i] + 1;
      }
    }
    return sorted[sorted.length -1] + 1;
};