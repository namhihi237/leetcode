/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
    let num = 0;
    let i = 0;
    while (i < s.length) {
        if (s[i] === 'X') {
            num++;
            i+=3
        } else {
            i++;
        } 
    }
    return num;
};