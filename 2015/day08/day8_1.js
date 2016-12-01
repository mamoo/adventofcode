/**
 * Solution of Advent of Code, day 8 Challenge
 * http://adventofcode.com/day/8
 */
var fs = require('fs');
fs.readFile("input.txt", 'utf8', function(err, data) {
	var lines = data.split('\n'),
		result = lines.reduce(function(previousValue, currentValue, currentIndex, array) {
			return previousValue + (currentValue.length - eval(currentValue).length);
		}, null);		
		console.log("Result is: " + result);			
});