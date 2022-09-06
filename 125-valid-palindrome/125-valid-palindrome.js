/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let r = '';
  for (let i = 0; i < s.length; i++) {
    const code = s[i].charCodeAt(0);
    if (code >= 65 && code <= 90) {
      r += s[i].toLowerCase();
    } else if (code >= 97 && code <= 122 || code >= 48 && code <= 57) {
      r += s[i];
    }
  }

  return r === r.split('').reverse().join('');
};