/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  let sObject = {}
  for (let i = 0; i < s.length; i++) {
    sObject[s[i]] = sObject[s[i]] ?  sObject[s[i]] + 1 : 1;
  }
  
  for (let i = 0; i < t.length; i++) {
    if(sObject[t[i]] >= 1) {
      sObject[t[i]] = sObject[t[i]] - 1;
    } else return false;
  }
  return true;
};