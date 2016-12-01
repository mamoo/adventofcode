/**
 * Answer to Advent of Code, day 19 Challenge
 * http://adventofcode.com/day/19
 */
var fs = require('fs'),
    _ = require('lodash');
 fs.readFile('input.txt', 'utf8', function(err, data) {
    var lines = data.split('\n'),
        molecule = lines.pop();
    lines.pop();
    var out = [];
    var rules = lines.map(function(line) { return line.match(/(.+)\s=>\s(.+)/); })
                     .map(function(match) { return { _key: match[1], _value: match[2]};});

    rules.forEach(function(rule) {
        var i = -1;
        do {
            i = molecule.indexOf(rule._key, i + 1);
            if (i >= 0) {
                var result = molecule.substr(0, i) + rule._value + molecule.substr(i + rule._key.length);
                out.push(result);
            }
        } while (i >= 0)
    })
    console.log(_.uniq(out).length);
});