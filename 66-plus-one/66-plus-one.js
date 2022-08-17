/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits = []) {
  let r = 0;
  let result = [];
  for (var i = digits.length - 1; i >= 0; i--) {
    let item = digits[i];
    if (i == digits.length - 1) {
      item += 1 + r;
    } else item += r;
    r = 0;
    if (item >= 10) {
      item -= 10;
      r = 1;
    }
    result.push(item);
    if (i == 0 && r == 1) {
      result.push(r)
    }
  }
  return result.reverse();
}