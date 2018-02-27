/** Get list of numbers that can be divided by every digit they contains, between two limiters.
 * @param {number} left min number, inclusive
 * @param {number} right max number, inclusive
 * @return {number[]} numbers that match the condition
 */
var selfDividingNumbers = function(left, right) {
  
  /** Check invalid min / max scenario. */
  if (left > right) return [];

  let answer = [];

  /** Iterate between min > max */
  for (let i = left; i < right + 1; i++) {
    let head = i;
    let tail = 0;
    
    /** Roll each digit to tail one by one and check if it's meeting the codition. */
    while (head > 0) {
      tail = head % 10;
      head = Math.floor(head / 10);
      if (tail == 0 || i % tail != 0) break;
    }

    /** Once all digits are rolled - check that last one is meeting condition. */
    if (head == 0 && i % tail == 0 ) answer.push(i);
  }
  return answer;
};

module.exports = selfDividingNumbers;
