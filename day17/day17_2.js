/**
 * Solution of Advent of Code, day 17 Challenge
 * http://adventofcode.com/day/17
 * Part 2
 */
var fs = require('fs'),
	check = 150,
	values = [],
	counts = [],
	min = 999,
	times = 0;
    
function fill(currentValue, currentIndex, containersCount){
	if (currentValue === check) {
        if (containersCount < min) {
            times = 1;
            min = containersCount;
		} else if (containersCount == min) times++;
        return;
    }
    for(var i = currentIndex + 1;i<20;i++) {
        if (currentValue + values[i] <= check)
           fill(currentValue + values[i], i, containersCount + 1);
    }
}

fs.readFile("input.txt", 'utf8', function(err, data) { 
	values = data.split('\n').map(function(value){ return parseInt(value);});
    for(var i = 0; i < values.length; i++)
        fill(values[i], i, 1);
	console.log(times);
});