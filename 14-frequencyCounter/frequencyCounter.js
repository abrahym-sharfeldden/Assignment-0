function frequencyCounter(word) {
  // Insert code here;
  let obj = {};

  	word = word.split('');

  	for(let i = 0; i < word.length; i++){
  		if (word[i] in obj)
  			obj[word[i]] += 1;
  		else
  			obj[word[i]] = 1;
  	}

  	return obj;
}

// Do not edit this line;
module.exports = frequencyCounter;