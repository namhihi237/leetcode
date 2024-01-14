/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
   if (words.length === 0) {
        return [];
    }
    const charCount = {};
    for (const char of words[0]) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let i = 1; i < words.length; i++) {
        const wordCharCount = {};
        for (const char of words[i]) {
            wordCharCount[char] = (wordCharCount[char] || 0) + 1;
        }
        for (const char in charCount) {
            charCount[char] = Math.min(charCount[char] || 0, wordCharCount[char] || 0);
        }
    }
    const result = [];
    for (const char in charCount) {
        result.push(...Array(charCount[char]).fill(char));
    }
    return result;
};