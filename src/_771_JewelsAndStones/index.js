/** Calculate how many Jewels there are in a list of Stones.
 * @param {string} J set of jewels
 * @param {string} S list of owned stones
 * @return {number} count of jewels in list of stones
 */
var numJewelsInStones = function(J, S) {
  let count = 0;

  /** Checks scenarios when one of strings is empty, null or undefined */
  if (!J || !S) return 0;

  /** Generates Set of Jewels */
  let jewels = new Set(J);

  /** Iterates over list of Stones and checks each if in set of Jewels */
  for (let i = 0; i < S.length; i++) {
    if (jewels.has(S[i])) {
      count++;
    }
  }

  return count;
};

module.exports = numJewelsInStones;
