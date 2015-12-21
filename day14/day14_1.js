/**
 * Solution of Advent of Code, day 14 Challenge
 * http://adventofcode.com/day/14
 */
var fs = require('fs'),
    inputTime = 2503;
fs.readFile("input.txt", 'utf8', function(err, data) {
    var coveredDistance = 0;
	data.split('\n').forEach(function(speedInfo){
		var tokens = speedInfo.match(/([A-Za-z]+)\scan\sfly\s(\d+)\skm\/s\sfor\s(\d+)\sseconds,\sbut\sthen\smust\srest\sfor\s(\d+)\sseconds\./),
			speed = parseInt(tokens[2]),
            travelTime = parseInt(tokens[3]),
            rest = parseInt(tokens[4]),
            distance = speed * travelTime;
        var cycleTime = travelTime + rest;
        var covered = (Math.floor(inputTime / cycleTime) * distance + Math.min(travelTime, (inputTime % cycleTime)) * speed);
        coveredDistance = Math.max(coveredDistance, covered);
	});
    console.log(coveredDistance);		
});