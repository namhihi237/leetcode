/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let numberProcess = n;
    while (numberProcess > 9) {
        numberProcess = calAquareDigit(numberProcess);
    }

    return numberProcess === 1 || numberProcess === 7
};

function calAquareDigit(n) {
    let arrNumbers = n.toString().split("");
    return arrNumbers.reduce((a, b) => a + b * b , 0);
}