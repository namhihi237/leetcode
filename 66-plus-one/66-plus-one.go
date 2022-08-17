func firstUniqChar(s string) int {
	fmt.Println('c' - 'a')
	t := make([]int, 26)
	fmt.Println(t)
	for _, v := range s {
		t[v-'a']++
	}
	for i, v := range s {
		if t[v-'a'] == 1 {
			return i
		}
	}
	return -1
}

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