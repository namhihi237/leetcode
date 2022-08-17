func strStr(haystack string, needle string) int {
	for i := 0; i < len(haystack); i++ {
		if haystack[i] == needle[0] {
			if len(haystack) >= i+len(needle) {
				if haystack[i:i+len(needle)] == needle {
					return i
				}
			} else {
				return -1
			}
		}
	}
	return -1
}
