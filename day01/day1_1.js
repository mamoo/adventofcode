/**
 * Answer to Advent of Code, day 1 Challenge
 * http://adventofcode.com/day/1
 */
var fs = require('fs'),
	  filename = "input.txt";
    
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  var total = 0;
  for (var i=0; i < data.length; i++){
    total = data[i] === '('	
		? ++total 
		: --total;
    console.log(total);    
  }
  console.log('TOTAL = ' + total);
});