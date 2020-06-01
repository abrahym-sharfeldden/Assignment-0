class MySolution {
  countDownSum(num) {
  	// MUST USE --num.
  	// Using num-- will go to infinite loop!
    return (num === 1) ? 1 : num + this.countDownSum(--num);
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;