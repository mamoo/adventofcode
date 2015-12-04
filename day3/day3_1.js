/**
 * Answer to Advent of Code, day 3 Challenge
 * http://adventofcode.com/day/3
 */
var fs = require('fs'),
	filename = "input.txt",
	houseMap = {};

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  var x = 0,
      y = 0;
  houseMap[x] = {}; 
  houseMap[x][y] = 1;
  
  var coordinates = data.split(''),
      totalOfVisitedHouses = 1;
      
  function isAlreadyVisited(x, y){
      return ;
  }
      
  for (var i=0; i < coordinates.length; i++){
    switch (coordinates[i]){
      case "^":
        y++;
        break;
      case "v":
        y--;
        break;
      case ">":
        x++;
        break;
      case "<":
        x--;
        break;      
    }
    if (!(houseMap[x] && houseMap[x][y])) {
      houseMap[x] = houseMap[x] || {};
      houseMap[x][y] = 1;
      totalOfVisitedHouses++;
    } 
  }
  console.log('Total number of visited houses is: ' + totalOfVisitedHouses);
});