
func plusOne(digits []int) []int {
	r := 0
	result := []int{}
	for i := len(digits) - 1; i >= 0; i-- {
		item := digits[i]
		if i == len(digits)-1 {
			item = item + r + 1
		} else {
			item = item + r
		}

		r = 0
		if item >= 10 {
			item = item - 10
			r = 1
		}

		result = append(result, item)
		if i == 0 && r != 0 {
			result = append(result, r)
		}
	}

	for i, j := 0, len(result)-1; i < j; i, j = i+1, j-1 {
		result[i], result[j] = result[j], result[i]
	}

	return result
}