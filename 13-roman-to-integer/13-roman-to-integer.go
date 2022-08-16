func romanToInt(s string) int {
	romanObject := map[string]int{
		"I": 1,
		"V": 5,
		"X": 10,
		"L": 50,
		"C": 100,
		"D": 500,
		"M": 1000,
	}

	inputIntArray := []int{}
	for i := len(s) - 1; i >= 0; i-- {
		inputIntArray = append(inputIntArray, romanObject[string(s[i])])
	}

	outputs := inputIntArray[0]
	max := inputIntArray[0]

	for i := 1; i < len(inputIntArray); i++ {
		if max > inputIntArray[i] {
			outputs -= inputIntArray[i]
		} else {
			outputs += inputIntArray[i]
			max = inputIntArray[i]
		}
	}

	return outputs
}
