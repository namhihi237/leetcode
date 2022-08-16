func firstUniqChar(s string) int {
	for i := 0; i < len(s); i++ {
		check := true
		for j := 0; j < len(s); j++ {
			if s[i] == s[j] && i != j {
				check = false
				break
			}
		}

		if check {
			return i
		}
	}
	return -1
}
