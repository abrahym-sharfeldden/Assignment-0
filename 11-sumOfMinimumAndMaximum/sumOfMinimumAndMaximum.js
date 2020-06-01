function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  let sum = Math.max(...nums) + Math.min(...nums);

  return sum;

}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;