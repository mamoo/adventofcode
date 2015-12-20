/**
 * Solution of Advent of Code, day 13 Challenge
 * http://adventofcode.com/day/13
 */
var fs = require('fs'),
	Combinatorics = require('js-combinatorics'),
	_ = require('lodash'),
	seatings = {};

function getHappiness(array){
	var happiness = 0;
	for(var i = 0; i < array.length; i++){
		var person = array[i],
        	before = array[(i - 1 + array.length) % array.length],
			after = array[(i + 1) % array.length];
		happiness += seatings[person][before];
		happiness += seatings[person][after]; 
	}
	return happiness;
}

fs.readFile("input.txt", 'utf8', function(err, data) {
	data.split('\n').forEach(function(seatingInfo){
		var tokens = seatingInfo.split(' '),
			guest1 = tokens[0],
			guest2 = tokens[10].replace('.','');
		if (!seatings[guest1]) seatings[guest1] = {};
			seatings[guest1][guest2] = tokens[2] === 'gain' ? parseInt(tokens[3]) : parseInt(tokens[3]) * -1;
	});	
	var permutations = Combinatorics.permutation(_.uniq(Object.keys(seatings)));
	console.log(Math.max.apply(0, permutations.map(getHappiness)));	
});