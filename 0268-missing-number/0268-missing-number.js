var missingNumber = function(nums) {
    const sorted = nums.sort((a,b) => a - b);
    let n = -1;

    for (let i = 0; i < sorted.length; i++) {
      if (n + 1 !== sorted[i]) {
        return n+1;
      }
      n++;
    }
    return n + 1;
};