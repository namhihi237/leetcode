/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const wordArray = s.split(' ').filter(e => e);
  return wordArray[wordArray.length - 1].length
};