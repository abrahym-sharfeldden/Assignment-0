class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    
    // set a pointer to the middle of the array
    // split the array into two branches: left, right
    // left being numbers less than middle pointer,
    // right being numbers greater than middle pointer
    let mid = Math.floor(nums.length / 2);
    let left = nums.slice(0, mid);
    let right = nums.slice(mid, nums.length);

    // checks if number is found;
    if(nums[mid] === target)
    	return true;

    // if number is not found yet, 
    // check if array can contain the number;
    if(nums.length > 1){
    	// if the target is less than the middle number; 
    	// check left branch;
    	if (nums[mid] > target)
    		this.flag =  this.binarySearch(left, target);
    	// else, it is greater than the middle number;
    	// check right branch;
    	else 
    		// recursively search the right branch array 
    		// for the target number greater than current mid pointer
    		this.flag = this.binarySearch(right, target);
    }

    // if nums.length is <= 1 AND didn't previously return true; 
    // target is not in array; 
    // this.flag never updates; return false;
    return this.flag;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;