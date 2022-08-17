/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const wordArray = s.trim().split(/\s+/g)
  return wordArray[wordArray.length - 1].length
};