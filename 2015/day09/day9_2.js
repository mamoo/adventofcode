/**
 * Solution of Advent of Code, day 9 Challenge
 * http://adventofcode.com/day/9
 * Part 2
 */
var fs = require('fs'),
	_ = require('lodash'),
	Combinatorics = require('js-combinatorics'),
	distances = {};

function findDistance(array){
	var dist = 0;
	for(var i = 0; i < array.length - 1; i++){ dist = dist + distances[array[i]][array[i+1]]; }
	return dist;
}

fs.readFile("input.txt", 'utf8', function(err, data) {
	data.split('\n').forEach(function(edgeInfo){
			var tokens = edgeInfo.split(' ');
			if (!distances[tokens[0]]) distances[tokens[0]] = {};
				distances[tokens[0]][tokens[2]] = parseInt(tokens[4]);
			if (!distances[tokens[2]]) distances[tokens[2]] = {};
				distances[tokens[2]][tokens[0]] = parseInt(tokens[4]);
	});
	var permutations = Combinatorics.permutation(_.uniq(Object.keys(distances)));
	var distance = Math.max.apply(0, permutations.map(findDistance));
	console.log('Max distance is ' + distance);
});