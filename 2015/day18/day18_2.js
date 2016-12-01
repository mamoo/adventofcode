/**
 * Answer to Advent of Code, day 18 Challenge
 * http://adventofcode.com/day/18
 * Part 2.
 */
var fs = require('fs'),
	maxItems = 100;

function getOnNeighbours(rowIndex, colIndex, matrix) {
	var count = 0;
	for (var i = rowIndex - 1; i < rowIndex + 2; i++)
		for (var j = colIndex - 1; j < colIndex + 2; j++)
			if (i >= 0 && i < maxItems
				&& j >= 0 && j < maxItems
				&& (i !== rowIndex || j !== colIndex) 
				&& matrix[i][j]) count++;
	return count;
}

function animate(matrix, currentIndex){	
	var newMatrix = matrix.map(function(currentLine,rowIndex){
		return currentLine.map(function(currentLight, colIndex){
			if ((rowIndex === 0 && colIndex === 0) || (rowIndex === 99 && colIndex === 99) 
				|| (rowIndex === 0 && colIndex === 99) || (rowIndex === 99 && colIndex === 0)) return true;

			if (currentLight)
				return getOnNeighbours(rowIndex, colIndex, matrix) === 2 
					   || getOnNeighbours(rowIndex, colIndex, matrix) === 3;
			else 
				return getOnNeighbours(rowIndex, colIndex, matrix) === 3;
		});
	});
    if (currentIndex === maxItems) { 
		console.log(newMatrix.reduce(function(previousValue, currentValue){
			return previousValue + currentValue.reduce(function(prev, curr){ 
				return prev + (curr ? 1 : 0); 
			}, 0); 
		}, 0));
		return;
	};
	animate(newMatrix, ++currentIndex);
}

fs.readFile('input.txt', 'utf8', function(err, data) {
	var lines = data.split('\n'),
		matrix = []; 
	matrix = lines.map(function(line){ return line.split('').map(function(status){ return status === '#' ? 1 : 0;}); });
	matrix[0][0] = 1;
	matrix[0][99] = 1;
	matrix[99][0] = 1;
	matrix[99][99] = 1;
	animate(matrix, 1);
});