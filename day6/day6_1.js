/**
 * Answer to Advent of Code, day 6 Challenge
 * http://adventofcode.com/day/6
 */
var fs = require('fs'),
	filename = "input.txt";

function parseCommand(line){
	var parsed = line.match(/\d+/g);
	var command = {
		x: Number(parsed[0]),
		y: Number(parsed[1]),
		x_end: Number(parsed[2]),
		y_end: Number(parsed[3])
	};
	if (line.indexOf('toggle') === 0) command.value = 'TOGGLE';
	else command.value = line.indexOf('turn on') > -1;	
	return command;	
}

fs.readFile(filename, 'utf8', function(err, data) {
	var lines = data.split('\n'),
		matrix = Array.apply(null, Array(1000)).map(function(){
			return Array.apply(null, Array(1000)).map(function(){return 0;});
		});
	for (var i = 0; i < lines.length; i++){
		var command = parseCommand(lines[i]);
		for (var y = command.y; y <= command.y_end; y++){
			for (var x = command.x; x <= command.x_end; x++) {
				matrix[y][x] = command.value === 'TOGGLE' ? Number(!matrix[y][x]) : Number(command.value);
			}
		}
	}
	var litNumber = 0
	for (var i = 0; i < matrix.length; i++){
		litNumber = litNumber + matrix[i].reduce(function(previousValue, currentValue, currentIndex, array) {
			return previousValue + currentValue;
		});
	}
	console.log('There are ' + litNumber + ' lit lights')
});