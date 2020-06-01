function titleCaseEdit(title) {
  // Insert code here;
  return title.toLowerCase()
  				.split(' ')
  				.map((str) => {
  					return (str.charAt(0).toUpperCase() + str.slice(1));
  			})
  		.join(' ');
}

// Do not edit this line;
module.exports = titleCaseEdit;