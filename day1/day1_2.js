/**
 * Answer to Advent of Code, day 1 Challenge
 * http://adventofcode.com/day/1
 * Second part.
 */
var fs = require('fs'),
	  filename = "input.txt";
    
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  var total = 0, 
      i = 0,
      found = false;
  console.log(data.length);
  while (!found && i < data.length){
    total = data.charAt(i) === '('	
      ? ++total 
      : --total;
    found = total === -1;
    i++;
  }
  console.log('Index is = ' + i);
});