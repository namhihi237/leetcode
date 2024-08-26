/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const prime = [];
  for (let i = 0; i <= n - 1; i++) {
    prime[i] = 1;
  }

  prime[0] = prime[1] = 0;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (prime[i]) {
      for (let j = i * i; j <= n; j += i) {
        prime[j] = 0;
      }
    }
  }
  return prime.reduce((a, b) => a + b, 0);
}