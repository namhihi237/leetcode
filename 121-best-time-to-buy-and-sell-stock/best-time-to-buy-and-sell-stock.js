/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let p = 0;
  let b = prices[0];
  for (let i = 1; i < prices.length; i++)  {
    if (b < prices[i]) {
      p = p < prices[i] - b ? prices[i] - b : p;
    } else {
      b = prices[i];
    }
  }
  
  return p;
};