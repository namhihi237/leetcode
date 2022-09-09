func reverseVowels(s string) string {
	vowels := []string{}
	result := ""
	vowelsMap := map[string]bool{
		"a": true,
		"A": true,
		"e": true,
		"E": true,
		"i": true,
		"I": true,
		"o": true,
		"O": true,
		"u": true,
		"U": true,
	}

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

func checkVowels(vowels map[string]bool, s string) bool {
	if _, ok := vowels[s]; ok {
		return true
	}

	return false
}