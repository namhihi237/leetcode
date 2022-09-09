func reverseVowels(s string) string {
	result := make([]byte, len(s))
	vowelsMap := [10]string{"a", "A", "e", "E", "i", "I", "o", "O", "u", "U"}

	i, j := 0, len(s)-1
	for i <= j {
		if !checkVowels(vowelsMap, string(s[i])) {
			result[i] = s[i]
			i++
			continue
		}

		if !checkVowels(vowelsMap, string(s[j])) {
			result[j] = s[j]
			j--
			continue
		}

		result[i] = s[j]
		result[j] = s[i]
		i++
		j--
	}

	return string(result)
}

func checkVowels(vowels [10]string, s string) bool {
	for _, v := range vowels {
		if v == s {
			return true
		}
	}
	return false
}