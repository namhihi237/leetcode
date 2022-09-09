var reverseVowels = function (s = "") {
  let result = [];
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let i = 0, j = s.length - 1;

  while (i <= j) {
    if (!checkVowels(vowels, s[i])) {
      result[i] = s[i];
      i++;
      continue;
    }

    if (!checkVowels(vowels, s[j])) {
      result[j] = s[j];
      j--;
      continue;
    }

    result[i] = s[j];
    result[j] = s[i];
    i++;
    j--;
  }

  return result.join('');
};

var checkVowels = (vowels, c) => {
  return vowels.includes(c.toLowerCase())
}