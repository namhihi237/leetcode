/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const morseCodes = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

  const wordsParsed = words.map(word => {
    return word.split("").map((c) => morseCodes[getCode(c)]).join("");
  });

  return [...new Set(wordsParsed)].length
};

const getCode = (char = '') => {
  return char.charCodeAt(0) - 97
}