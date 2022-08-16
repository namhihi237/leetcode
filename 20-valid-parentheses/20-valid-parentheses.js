/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const open = ["(", "[", "{"];
  const object = {
    ")": "(",
    "}": "{",
    "]": "[",
  }
  for (let item of s) {
    if (open.includes(item)) {
      stack.push(item);
    }
    else {
      if (stack[stack.length - 1] === object[item]) {
        stack.pop();
      } else return false;
    }
  }

  return stack.length === 0
}