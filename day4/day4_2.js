/**
 * Answer to Advent of Code, day 4 Challenge
 * http://adventofcode.com/day/4
 * Part 2
 */
var md5 = require("./md5.min").md5,
	key = "iwrupvqb",
	i = -1,
	found = false;
while (!found){
	var hash = md5(key + ++i);
	found = hash.indexOf('000000') === 0;
}
console.log('Found: ' + i);