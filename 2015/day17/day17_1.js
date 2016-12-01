/**
 * Solution of Advent of Code, day 17 Challenge
 * http://adventofcode.com/day/17
 */
var fs = require('fs'),
	combinationCount = 0,
	check = 150,
	values = [];
    
function fill(currentValue, currentIndex){
	if (currentValue === check) { 
        combinationCount++;
        return;
    }
    for(var i = currentIndex + 1;i<20;i++) {
        if (currentValue + values[i] <= check)
           fill(currentValue + values[i], i);
    }
}

fs.readFile("input.txt", 'utf8', function(err, data) { 
	values = data.split('\n').map(function(value){ return parseInt(value);});
    for(var i = 0; i < values.length; i++) {
        fill(values[i], i);
    }
	console.log(combinationCount);
});