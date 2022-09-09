var reverseVowels = function (s = "") {
  let result = [];
  let i = 0, j = s.length - 1;

  while (i <= j) {
    if (!checkVowels(s[i])) {
      result[i] = s[i];
      i++;
      continue;
    }

    if (!checkVowels(s[j])) {
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

var checkVowels = (c) => {
  return ['a', 'e', 'i', 'o', 'u'].includes(c?.toLowerCase())
}