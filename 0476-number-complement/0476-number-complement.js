/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    const bits = [];
    while (num) {
      bits.unshift(num % 2 ? 0 : 1);
      num = Math.floor(num/2);
    }

    let res = 0;
    for (let i = 0; i < bits.length; i ++) {
      if (bits[i]) {
        res += Math.pow(2 ,bits.length - i - 1)
      }
    }
    return res;
};