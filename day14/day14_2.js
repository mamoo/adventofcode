/**
 * Solution of Advent of Code, day 14 Challenge
 * http://adventofcode.com/day/14
 * Part 2
 */
var fs = require('fs'),
    inputTime = 2503;
fs.readFile("input.txt", 'utf8', function(err, data) {
    var reindeersInfo = [];
	data.split('\n').forEach(function(speedInfo){
		var tokens = speedInfo.match(/([A-Za-z]+)\scan\sfly\s(\d+)\skm\/s\sfor\s(\d+)\sseconds,\sbut\sthen\smust\srest\sfor\s(\d+)\sseconds\./);
            reindeersInfo.push({ 
                speed : parseInt(tokens[2]), 
                travelTime : parseInt(tokens[3]), 
                cycletime : parseInt(tokens[3]) + parseInt(tokens[4]),
                distance : 0,
                points: 0 
            });
	});
    for (var i = 0; i < inputTime; i++){
        reindeersInfo.forEach(function(info) {
            if ((i % info.cycletime) < info.travelTime) info.distance = info.distance + info.speed;
        }, this);
        var ahead = Math.max.apply(0, reindeersInfo.map(function(e){ return e.distance}));
        reindeersInfo.map(function(info){ 
            if (info.distance === ahead) info.points++;
            return info;
        });
    }
    console.log(Math.max.apply(0, reindeersInfo.map(function(e){ return e.points})));
});
