function fizzBuzz(start, end) {
  // Insert code here;
	// multiples of 3 and 5 share a common multiple of 15
	// first check if multiple of 15, 
	// then check if multiple of 3,
	// then check if multiple of 5,
	// else, push number

  	let arr = [];
	let iter = start;

	// *** Fancier way to write ? 
	while(iter <= end) {
		arr.push(
			(iter % 15 === 0) ? "FizzBuzz" : (
				(iter % 3 === 0) ? "Fizz" : (
					(iter % 5 === 0) ? "Buzz" : iter))
		);
		++iter
	}
	
  // for(let i = start; i <= end; ++i){
  // 	if(i % 15 === 0){
  // 		arr.push("FizzBuzz");
  // 	}
  // 	else if(i % 3 === 0) {
  // 		arr.push("Fizz");
  // 	}
  // 	else if(i % 5 === 0) {
  // 		arr.push("Buzz");
  // 	} 
  // 	else{
  // 		arr.push(i);
  // 	}
  // }

  return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;