function containsDuplicate(nums: number[]): boolean {
	const arrDistinct: number[] = [];
	for (let i = 0; i < nums.length; i++) {
		if (arrDistinct.includes(nums[i])) {
			return true;
		} else {
			arrDistinct.push(nums[i]);
		}
	}
	if (arrDistinct.length === nums.length) return false;
	else return true;
}