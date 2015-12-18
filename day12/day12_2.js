/**
 * Solution of Advent of Code, day 12 Challenge
 * http://adventofcode.com/day/12
 * Part 2
 */
var fs = require('fs'),
	_ = require('lodash'),
	sum = 0;
function process(obj) {
	for (var property in obj) {
		if (obj.hasOwnProperty(property)) {
			var toDelete = false;
			if (!_.isArray(obj[property])){
				_.forOwn(obj[property], function(value, key) {
					toDelete = toDelete || value === 'red' ;
				});				
			}
			if (toDelete) delete obj[property];
			else if (typeof obj[property] == "object") {
				process(obj[property]);
			} 
		}
	}
}

fs.readFile("input.txt", 'utf8', function(err, data) {
	var obj = JSON.parse(data);
	process(obj);
	console.log(JSON.stringify(obj).match(/(-?\d+)/g).reduce(function(prev, curr){ return parseInt(prev) + parseInt(curr); }));
});                           
