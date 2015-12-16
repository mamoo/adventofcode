/**
 * Answer to Advent of Code, day 5 Challenge
 * http://adventofcode.com/day/5
 * Part 2
 */
var fs = require('fs'),
	filename = "input.txt";

fs.readFile(filename, 'utf8', function(err, data) {
	var lines = data.split('\n'),
		niceStringsCount = 0;
	for (var i = 0; i < lines.length; i++){
		if (!/(..).*\1/.test(lines[i])) continue;
		if (!/(.).\1/.test(lines[i])) continue;
		niceStringsCount++;
	}
	console.log('There are ' + niceStringsCount + ' nice strings');
});