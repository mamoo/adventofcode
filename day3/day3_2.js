/**
 * Answer to Advent of Code, day 3 Challenge
 * http://adventofcode.com/day/3
 * Part 2
 */
var fs = require('fs'),
	filename = "input.txt",
	houseMap = {};

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  var position = {
      santa: { x: 0, y: 0},
      robo_santa:  { x: 0, y: 0}
    };
  houseMap[0] = {}; 
  houseMap[0][0] = 1;
  
  var coordinates = data.split(''),
      totalOfVisitedHouses = 1;
      
  function isAlreadyVisited(x, y){
      return ;
  }
  
  for (var i=0; i < coordinates.length; i++){
    var target = (i%2) ? "robo_santa" : "santa"; 
    switch (coordinates[i]){
      case "^":
        position[target].y++;
        break;
      case "v":
        position[target].y--;
        break;
      case ">":
        position[target].x++;
        break;
      case "<":
        position[target].x--;
        break;      
    }
    if (!(houseMap[position[target].x] && houseMap[position[target].x][position[target].y])) {
      houseMap[position[target].x] = houseMap[position[target].x] || {};
      houseMap[position[target].x][position[target].y] = 1;
      totalOfVisitedHouses++;
    } 
  }
  console.log('Total number of visited houses is: ' + totalOfVisitedHouses);
});