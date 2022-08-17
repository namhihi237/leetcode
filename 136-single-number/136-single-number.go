import (
	"strconv"
)

func singleNumber(nums []int) int {
	obj := make(map[string]bool)
	result := 0
	for _, n := range nums {
		numberString := strconv.Itoa(n)
		if _, ok := obj[numberString]; ok {
			delete(obj, numberString)
		} else {
			obj[numberString] = true
		}
	}

	for k := range obj {
		result, _ = strconv.Atoi(k)
	}

	return result
}