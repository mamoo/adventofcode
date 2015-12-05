/**
 * Answer to Advent of Code, day 5 Challenge
 * http://adventofcode.com/day/5
 */
var fs = require('fs'),
	filename = "input.txt";

fs.readFile(filename, 'utf8', function(err, data) {
	var lines = data.split('\n'),
		niceStringsCount = 0,
		vowels = ['a','e','i','o','u'];
	for (var i = 0; i < lines.length; i++){
		if (/(ab)|(cd)|(pq)|(xy)/.test(lines[i])) continue;
		if (!/(.*[aeiou]){3}/.test(lines[i])) continue;
		
		var hasDouble = false;
		lines[i].split('').reduce(function(previous, current, currentIndex, array) {
			hasDouble = hasDouble || previous === current;
			return current;
		});
		if (!hasDouble) continue;
		niceStringsCount++;
	}
	console.log('There are ' + niceStringsCount + ' nice strings');
});