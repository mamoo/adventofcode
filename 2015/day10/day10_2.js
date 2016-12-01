/**
 * Solution of Advent of Code, day 10 Challenge
 * http://adventofcode.com/day/10
 * Part 2
 */
var input = "1321131112",
	regex = /([0-9])\1*/g;
function lookAndSay(input){
	var ret = "";
	input.match(regex).forEach(function(match) { ret = ret + match.length + match[0]; }, this);
	return ret;
}
for(var i = 0; i < 50; i++){
	input = lookAndSay(input);
}
console.log(input.length);