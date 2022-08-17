/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const first = needle[0]
  const len = needle.length

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === first) {
      if (haystack.substring(i, i + len) === needle) {
        return i;
      }
    }
  }
  return -1
};