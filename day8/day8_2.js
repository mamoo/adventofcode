var fs = require('fs');
fs.readFile("input.txt", 'utf8', function(err, data) {
	var lines = data.split('\n'),
		result = lines.reduce(function(previousValue, currentString, currentIndex, array) {
			var escapedString = currentString.replace(/\\|"/g,'11')+'11';
			return previousValue + (escapedString.length - currentString.length);
		}, null);		
		console.log("Result is: " + result);			
});