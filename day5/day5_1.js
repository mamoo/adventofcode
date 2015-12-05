/**
 * Answer to Advent of Code, day 5 Challenge
 * http://adventofcode.com/day/5
 */
var fs = require('fs'),
	filename = "input.txt";

fs.readFile(filename, 'utf8', function(err, data) {
	var lines = data.split('\n'),
		niceStringsCount = 0,
		vowels = ['a','e','i','o','u'];
	for (var i = 0; i < lines.length; i++){
		if (/(ab)|(cd)|(pq)|(xy)/.test(lines[i])) continue;
		var differentVowelsCount = 0;
		for (var j = 0; j < vowels.length; j++){
			var regex = new RegExp(vowels[j], 'g');
			differentVowelsCount = differentVowelsCount + (lines[i].match(regex) ? lines[i].match(regex).length : 0);
			if (differentVowelsCount > 2) break; 
		}
		if (differentVowelsCount < 3) continue;
				
		var lettersMap = {};
		for (var character in lines[i]){
			if (!lettersMap[character]) lettersMap[character] = 1;
			else lettersMap[character]++;
		}
		
		var hasDouble = false;
		lines[i].split('').reduce(function(previous, current, currentIndex, array) {
			hasDouble = hasDouble || previous === current;
			return current;
		});
		if (!hasDouble) continue;
		niceStringsCount++;
	}
	console.log('There are ' + niceStringsCount + ' nice strings');
});