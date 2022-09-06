func isPalindrome(s string) bool {
	var p string
	for _, v := range s {
		if v >= 65 && v <= 90 {
			p += string(v + 32)
		} else if v >= 97 && v <= 122 || v >= 48 && v <= 57 {
			p += string(v)
		}
	}

	for i := 0; i < len(p); i++ {
		if p[i] != p[len(p)-i-1] {
			return false
		}
	}

	return true
}