/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let b = prices[0];
    let s = 0;
    let p = 0;
  for (let i = 1; i<prices.length;i++) {
    if (prices[i] <= b && prices[i] <= prices[i-1] && s == 0) {
      b = prices[i];
    } else if (prices[i] > s && prices[i] >= prices[i-1]) {
      s = prices[i];
      if (i == prices.length - 1) {
        p += s - b;
      }
    } else {
      p += s - b
      b = prices[i];
      s = 0;
    } 
  }
  return p;
};