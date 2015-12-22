/**
 * Solution of Advent of Code, day 15 Challenge
 * http://adventofcode.com/day/15
 * AKA how ugly is that?
 */
function findCombinations(){
    var combinations = [];
    for (a = 1; a < 98; a++){
        for (b = 1; b < 98; b++){
            for (c = 1; c < 98; c++){
                for (d = 1; d < 98; d++){
                    if (a+b+c+d === 100) {
                        combinations.push([a, b, c, d]);
                    }
                }
            }
        }
    }
    return combinations;
}

var fs = require('fs'),
    scores = [];
fs.readFile("input.txt", 'utf8', function(err, data) {
    var ingredients = [];
	data.split('\n').forEach(function(ingredient){
		var tokens = ingredient.match(/([A-Za-z]+)\:\scapacity\s(\-?\d+),\sdurability\s(\-?\d+),\sflavor\s(\-?\d+),\stexture\s(\-?\d+),\scalories\s(\-?\d+)/);
        ingredients.push({ 
            name: tokens[1], 
            capacity : parseInt(tokens[2]),
            durability : parseInt(tokens[3]),
            flavor : parseInt(tokens[4]),
            texture : parseInt(tokens[5]),
            calories : parseInt(tokens[6])
        });

	});
    findCombinations().forEach(function(combination) {
        var capacity = (ingredients[0].capacity * combination[0] + ingredients[1].capacity * combination[1] 
                    + ingredients[2].capacity * combination[2] + ingredients[3].capacity * combination[3]);
        var durability = (ingredients[0].durability * combination[0] + ingredients[1].durability * combination[1] 
                    + ingredients[2].durability * combination[2] + ingredients[3].durability * combination[3]);
        var flavor = (ingredients[0].flavor * combination[0] + ingredients[1].flavor * combination[1] 
                    + ingredients[2].flavor * combination[2] + ingredients[3].flavor * combination[3]);
        var texture = (ingredients[0].texture * combination[0] + ingredients[1].texture * combination[1] 
                    + ingredients[2].texture * combination[2] + ingredients[3].texture * combination[3]);
        if (capacity > 0 && durability > 0 && flavor > 0 && texture > 0)
            scores.push(capacity * durability * flavor * texture);     
    }, this);
    console.log(Math.max.apply(0, scores));
});