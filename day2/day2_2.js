/**
 * Answer to Advent of Code, day 2 Challenge
 * http://adventofcode.com/day/2
 * Part2
 */
var fs = require('fs'),
	  filename = "input.txt";
    
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  var calculateRibbonForEachBox = function (l, w, h){
    var args = Array.prototype.slice.call(arguments),
        sortingfunction = function(a, b) {return a - b;},
        smallestSidePerimeter = (args.sort(sortingfunction)[0] * 2) + (args.sort(sortingfunction)[1] * 2);
    return (l*w*h) + smallestSidePerimeter;
  };
  
  var lines = data.split('\n');
  var total = 0;
  for (var i=0; i < lines.length; i++){
    total = total + calculateRibbonForEachBox.apply(this, lines[i].split('x'));;
  }
  console.log('TOTAL = ' + total);
});