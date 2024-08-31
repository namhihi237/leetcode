/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  let m1 = {}, m2 = {}

  for (let i = 0; i < s.length; i++) {
    if ((m1[s[i]] !== t[i] && m1[s[i]]) || (m2[t[i]] !== s[i] && m2[t[i]])) return false;

    m1[s[i]] = t[i];
    m2[t[i]] = s[i];
  }

  return true;
};