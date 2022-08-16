func isValid(s string) bool {
	stack := []string{}
	open := []string{"(", "{", "["}
	object := map[string]string{
		")": "(",
		"}": "{",
		"]": "[",
	}

	for i := 0; i < len(s); i++ {
		if isOpen(string(s[i]), open) {
			stack = append(stack, string(s[i]))
		} else {
			if len(stack) == 0 {
				return false
			}

			if stack[len(stack)-1] == object[string(s[i])] {
				stack = stack[:len(stack)-1]
			} else {
				return false
			}
		}
	}
	return len(stack) == 0
}

func isOpen(item string, open []string) bool {
	for i := 0; i < len(open); i++ {
		if item == open[i] {
			return true
		}
	}
	return false
}
