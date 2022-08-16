func isValid(s string) bool {
	stack := []string{}
	object := map[string]string{
		")": "(",
		"}": "{",
		"]": "[",
	}

	for i := 0; i < len(s); i++ {
		switch string(s[i]) {
		case "(", "[", "{":
			stack = append(stack, string(s[i]))
		default:
			if len(stack) == 0 {
				return false
			} else if stack[len(stack)-1] == object[string(s[i])] {
				stack = stack[:len(stack)-1]
			} else {
				return false
			}

		}
	}
	return len(stack) == 0
}