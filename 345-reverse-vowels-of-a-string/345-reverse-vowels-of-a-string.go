func reverseVowels(s string) string {
	vowels := []string{}
	result := ""
	vowelsMap := []string{"a", "A", "e", "E", "i", "I", "o", "O", "u", "U"}

	for _, v := range s {
		if checkVowels(vowelsMap, string(v)) {
			vowels = append(vowels, string(v))
		}
	}

	i := len(vowels) - 1
	for _, v := range s {
		if checkVowels(vowelsMap, string(v)) {
			result += vowels[i]
			i--
		} else {
			result += string(v)
		}
	}

	return result
}

func checkVowels(vowels []string, s string) bool {
	for _, v := range vowels {
		if v == s {
			return true
		}
	}
	return false
}