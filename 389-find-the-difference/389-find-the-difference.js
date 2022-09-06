/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s = '', t = '') {
  s = s.split('').sort();
  t = t.split('').sort();

  for (var i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) return t[i];
  }
  return t[t.length - 1];
};