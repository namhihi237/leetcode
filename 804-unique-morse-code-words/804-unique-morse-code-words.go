func uniqueMorseRepresentations(words []string) int {
	morseCodes := []string{".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."}
	result := make(map[string]bool)

	for _, word := range words {
		wordParsed := ""
		for _, c := range word {
			wordParsed += morseCodes[c-97]
		}

		result[wordParsed] = true
	}

	return len(result)
}