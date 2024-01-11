/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let rs = [];
  for (let i = 0; i <= n; i++) {
    rs.push(countNumberOfOne(i));
  }
  return rs;
};

function countNumberOfOne(n) {
  let numerOfOne = 0;
  while (n) {
    numerOfOne += (n % 2);
    n = Math.floor(n/2);
  }
  return numerOfOne;
}