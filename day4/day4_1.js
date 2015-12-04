/**
 * Answer to Advent of Code, day 4 Challenge
 * http://adventofcode.com/day/4
 */
var md5 = require("./md5.min").md5,
	key = "iwrupvqb",
	i = -1,
	found = false;
while (!found){
	var hash = md5(key + ++i);
	found = hash.indexOf('00000') === 0;
}
console.log('Found: ' + i);