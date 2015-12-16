/**
 * Solution of Advent of Code, day 12 Challenge
 * http://adventofcode.com/day/12
 */
var fs = require('fs');
fs.readFile("input.txt", 'utf8', function(err, data) {
	console.log(
		data.match(/(-?\d+)/g).reduce(function(prev, curr){ return parseInt(prev) + parseInt(curr); }));
});