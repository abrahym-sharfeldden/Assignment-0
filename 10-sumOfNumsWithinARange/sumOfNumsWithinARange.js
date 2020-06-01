function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  let count = 0;
  
  for(const element of nums){
  	if(element >= start && element <= end)
  		count++
  }

  return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;