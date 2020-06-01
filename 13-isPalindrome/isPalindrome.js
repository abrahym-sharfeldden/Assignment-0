function isPalindrome(word) {
  // Insert code here;
  return word === word.split('').reverse().join('');
}

// Do not edit this line;
module.exports = isPalindrome;