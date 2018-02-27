/** Analyze string with movements and defines if robot got back to the original place.
 * @param {string} moves the valid robot moves are R (Right), L (Left), U (Up) and D (down)
 * @return {boolean} true if robot returned to original point
 */
var judgeCircle = function(moves) {

  /** Checks if string is empty, null, or undefined. */
  if (!moves) return false;

  /** Checks if string has odd number of moves. */
  if (moves.length % 2 == 1) return false;

  let vertical = 0;
  let horizontal = 0;

  /** Iterates over string and updates vertical and horizontal accodingly. */
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case 'U': vertical++; break;
      case 'D': vertical--; break;
      case 'R': horizontal++; break;
      case 'L': horizontal--; break;
      default: return false;
    }
  }

  return (vertical == 0 && horizontal == 0);
  
};

module.exports = judgeCircle;
