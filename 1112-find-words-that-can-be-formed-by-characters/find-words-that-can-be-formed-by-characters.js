/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  const charCount = {};
  for (const char of chars) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let sum = 0;
  for (const word of words) {
    if (canFormWord(word, charCount)) {
      sum += word.length;
    }
  }

  return sum;
};

function canFormWord(word, charCount) {
  const count = {};
  for (let i = 0; i < word.length; ++i) {
    const char = word[i];
    if (!charCount[char] || count[char] >= charCount[char]) {
      return false;
    }
    count[char] = (count[char] || 0) + 1;
  }
  return true;
}