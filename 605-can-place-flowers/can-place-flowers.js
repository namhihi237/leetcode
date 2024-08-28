/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0 ; i < flowerbed.length; i ++) {
if (flowerbed[i] === 0 && (flowerbed[i+1] == 0 || i + 1 === flowerbed.length) && flowerbed[i-1] !== 1) {
      n--;
      flowerbed[i] = 1;
      i++;
      
    }
  }
  return n <= 0;
};