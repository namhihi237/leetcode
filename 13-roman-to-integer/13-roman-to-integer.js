/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const inputArrayReverse = s.split("").map(item => ({
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  })[item]).reverse();

  let outputs = 0
  let output = inputArrayReverse[0];

  for (let i = 0; i < inputArrayReverse.length; i++) {
    if (output > inputArrayReverse[i + 1]) {
      output -= inputArrayReverse[i + 1];
    } else {
      outputs += output;
      output = inputArrayReverse[i + 1];
    }
  }

  return outputs;
};