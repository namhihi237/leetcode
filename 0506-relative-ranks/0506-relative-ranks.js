/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const sorted = [...score].sort((a,b) => b - a);
    const sortedHash = {}
    for (let i = 0; i < sorted.length; i++) {
      switch (i) {
        case 0: 
          sortedHash[sorted[i]] = 'Gold Medal';
          break;
        case 1: 
          sortedHash[sorted[i]] = 'Silver Medal';
          break;
        case 2: 
          sortedHash[sorted[i]] = 'Bronze Medal';
          break;
        default:
          sortedHash[sorted[i]] = (i + 1).toString();
      }
    }
  return score.map((e) => sortedHash[e])
};