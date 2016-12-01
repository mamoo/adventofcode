/**
 * Solution of Advent of Code, day 13 Challenge
 * http://adventofcode.com/day/13
 * Part 2
 */
var fs = require('fs'),
	Combinatorics = require('js-combinatorics'),
	_ = require('lodash'),
	happiness = 0;
	seatings = {};

function getHappiness(array){
	happiness = 0;
	array.push('me');
	for(var i = 0; i < array.length; i++){
		var person = array[i],
        	before = array[(i - 1 + array.length) % array.length],
			after = array[(i + 1) % array.length];
		if (person !== 'me' && before !== 'me') happiness += seatings[person][before];
		if (person !== 'me' && after !== 'me') happiness += seatings[person][after]; 
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
	var guests = _.uniq(Object.keys(seatings));
	var permutations = Combinatorics.permutation(guests);
	console.log(Math.max.apply(0, permutations.map(getHappiness)));	
});