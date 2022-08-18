/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x <= 1) return x;
  else if (x <= 3 && x > 1) return 1;
  const hafl = x / 2;
  for (let i = 1; i <= hafl; i++) {
    const r = x / i;
    if (i == Math.floor(r)) return i;
    else if (i > r) return --i;
  }
  return -1;
};