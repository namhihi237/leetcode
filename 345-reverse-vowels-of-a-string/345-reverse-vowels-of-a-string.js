/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s = "") {
  const vowels = [];
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (checkVowels(s[i])) {
      vowels.push(s[i]);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (checkVowels(s[i])) {
      result += vowels.pop();
    } else {
      result += s[i];
    }
  }

  return result;
};

var checkVowels = (c) => {
  return ['a', 'e', 'i', 'o', 'u'].includes(c.toLowerCase())
}