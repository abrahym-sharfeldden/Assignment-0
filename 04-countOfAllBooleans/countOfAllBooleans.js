function countOfAllBooleans(arr) {
  // Insert code here;
  	let count = 0;

	for(let i = 0; i < arr.length; ++i)
		if (!!arr[i] === arr[i]) ++count;

	return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;