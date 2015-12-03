/**
 * Answer to Advent of Code, day 2 Challenge
 * http://adventofcode.com/day/2
 */
var fs = require('fs'),
	  filename = "input.txt";
    
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  var calculateArea = function (l, w, h){
    var args = Array.prototype.slice.call(arguments),
        sortingfunction = function(a, b) {return a - b;},
        smallestSideArea = args.sort(sortingfunction)[0] * args.sort(sortingfunction)[1];
    return (2*l*w) + (2*w*h) + (2*h*l) +  smallestSideArea;
  };
  
  var lines = data.split('\n');
  var total = 0;
  for (var i=0; i < lines.length; i++){
    total = total + calculateArea.apply(this, lines[i].split('x'));;
  }
  console.log('TOTAL = ' + total);
});