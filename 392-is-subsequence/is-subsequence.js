/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (!s.length) return true;
  let k = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[k]) {
      k++
    }
    if (k === s.length) return true;
  }
  
  return false;
};