function pairSum(nums, target) {
  // Insert code here;
  if(nums.length < 2){
  	throw "Error - Input array should have at least 2 values."
  }

  for(let i = 0; i < nums.length; i++){
  	for(let j = 0; j < nums.length; j++){
  		// ensure that the two values are distinct
  		if(j === i) continue;

  		if (nums[i] + nums[j] === target)
  			return true;
  	}
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;