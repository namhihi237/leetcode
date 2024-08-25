/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let sum = 0;
  const charsMap = new Map();
  for (const char of chars) {
    charsMap.set(char, charsMap.get(char) ? charsMap.get(char) + 1 : 1);
  }

  for (const word of words) {
    let ok = true;
    let charsMapClone = new Map([...charsMap]);

    for (let i = 0, len = word.length; i < len; ++i) {
      const char = word[i];
      if (charsMapClone.get(char)) {
        charsMapClone.set(char, charsMapClone.get(char) - 1);
      } else {
        ok = false;
        break;
      }
    }

    if (ok) {
      sum += word.length;
    }
  };

  return sum;
}