/**
 * Solution of Advent of Code, day 16 Challenge
 * http://adventofcode.com/day/16
 * Part 2
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
	aunts = [],
	functionRangeGreater = function(auntSue, property) { if (auntSue[property] > MFCSAM[property]) auntSue.score++ },
	functionRangeLessthan =  function(auntSue, property) { if (auntSue[property] < MFCSAM[property]) auntSue.score++ },
	functionStandard =  function(auntSue, property) { if (auntSue[property] === MFCSAM[property]) auntSue.score++ },
	scoreMapping = {
		cats: functionRangeGreater,
		trees: functionRangeGreater,
		pomeranians: functionRangeLessthan,
		goldfish :functionRangeLessthan,
		children: functionStandard,
		samoyeds: functionStandard,
		cars: functionStandard,
		perfumes: functionStandard,
		vizslas: functionStandard,
		akitas: functionStandard,
	};
fs.readFile("input.txt", 'utf8', function(err, data) {
	data.split('\n').forEach(function(auntInfo){
		var tokens = auntInfo.match(regex),
			auntSue = { id : tokens[1]};
		auntSue[tokens[2]] = parseInt(tokens[3]);
		auntSue[tokens[4]] = parseInt(tokens[5]);
		auntSue[tokens[6]] = parseInt(tokens[7]);
		auntSue.score = 0;
		if (MFCSAM[tokens[2]]) scoreMapping[tokens[2]](auntSue, tokens[2]);
		if (MFCSAM[tokens[4]]) scoreMapping[tokens[4]](auntSue, tokens[4]);
		if (MFCSAM[tokens[6]]) scoreMapping[tokens[6]](auntSue, tokens[6]);
		if (auntSue.akitas && auntSue.akitas > 0) auntSue.score--;
		if (auntSue.vizslas && auntSue.vizslas > 0) auntSue.score--;
		if (auntSue.score > 0) aunts.push(auntSue);		
	});
	var maxScore = Math.max.apply(0, aunts.map(function(aunt){return aunt.score;}));
	console.log(_.findWhere(aunts, { 'score' : maxScore}));
});