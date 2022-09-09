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
		if _, ok := vowelsMap[string(v)]; ok {
			vowels = append(vowels, string(v))
		}
	}

	i := len(vowels) - 1
	for _, v := range s {
		if _, ok := vowelsMap[string(v)]; ok {
			result += vowels[i]
			i--
		} else {
			result += string(v)
		}
	}

	return result
}