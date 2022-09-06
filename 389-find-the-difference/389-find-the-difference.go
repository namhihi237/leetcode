func findTheDifference(s string, t string) byte {
	var rs byte
	for _, v := range s {
		rs ^= byte(v)
	}

	for _, v := range t {
		rs ^= byte(v)
	}

	return rs
}
