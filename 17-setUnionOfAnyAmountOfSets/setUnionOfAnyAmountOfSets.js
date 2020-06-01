function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let set = new Set();
  for (let i = 0; i < args.length; i++)
  	for (const arg of args[i])
  		set.add(arg);

  return set;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;