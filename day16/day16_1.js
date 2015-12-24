/**
 * Solution of Advent of Code, day 16 Challenge
 * http://adventofcode.com/day/16
 */
var fs = require('fs'),
	_ = require('lodash'),
 	MFCSAM = {
		children: 3,
		cats: 7,
		samoyeds: 2,
		pomeranians: 3,
		akitas: 0,
		vizslas: 0,
		goldfish: 5,
		trees: 3,
		cars: 2,
		perfumes: 1
	},
	regex = /Sue\s(\d+)\:\s([a-z]+)\:\s(\d+),\s([a-z]+)\:\s(\d+),\s([a-z]+)\:\s(\d+)/,
	aunts = [];
fs.readFile("input.txt", 'utf8', function(err, data) {
	data.split('\n').forEach(function(auntInfo){
		var tokens = auntInfo.match(regex),
			auntSue = { id : tokens[1]};
		auntSue[tokens[2]] = parseInt(tokens[3]);
		auntSue[tokens[4]] = parseInt(tokens[5]);
		auntSue[tokens[6]] = parseInt(tokens[7]);
		auntSue.score = 0;
		if (MFCSAM[tokens[2]] && MFCSAM[tokens[2]] === auntSue[tokens[2]]) auntSue.score++;
		if (MFCSAM[tokens[4]] && MFCSAM[tokens[4]] === auntSue[tokens[4]]) auntSue.score++;
		if (MFCSAM[tokens[6]] && MFCSAM[tokens[6]] === auntSue[tokens[6]]) auntSue.score++;
		if (auntSue.akitas && auntSue.akitas > 0) auntSue.score--;
		if (auntSue.vizslas && auntSue.vizslas > 0) auntSue.score--;
		if (auntSue.score > 0) aunts.push(auntSue);		
	});
	var maxScore = Math.max.apply(0, aunts.map(function(aunt){return aunt.score;}));
	console.log(_.findWhere(aunts, { 'score' : maxScore}));
});