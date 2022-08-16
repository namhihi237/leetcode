/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let unique = {};

  for (var i = 0; i < s.length; i++) {
    if (unique[s[i]]) {
      unique[s[i]] += 1
    } else unique[s[i]] = 1;
  }

  let check = null;
  for (let prop in unique) {
    if (unique[prop] == 1) {
      check = prop;
      break;
    }
  }

  if (check) {
    return s.split('').findIndex(i => i == check)
  }
  return -1;
}