/**
 * Answer to Advent of Code, day 7 Challenge
 * http://adventofcode.com/day/7
 */
var fs = require('fs'),
	filename = "input.txt",
	numberRegex = /\d+/,
	commandMap = {
			'NOT' 	 : function(a, b){ return a ^ 65535; },
			'LSHIFT' : function(a, b){ return a << b; },
			'RSHIFT' : function(a, b){ return a >> b; },
			'AND'	 : function(a, b){ return a & b; },
			'OR'	 : function(a, b){ return a | b; },
			'NO-OP'  : function(a, b){ return a; }
		},
	wires = [];

function parseNumber (input){
	if (numberRegex.test(input)) return parseInt(input);
	return input;
}

function parseCommand(line){
	var elements = line.split(' ');
	if (elements.length === 3) return { leftOperand : parseNumber(elements[0]), operation: commandMap['NO-OP'], rightOperand : null, target: elements[2], source: line }; 
	if (elements.length === 4) return { leftOperand : parseNumber(elements[1]), operation: commandMap[elements[0]], rightOperand : null, target: elements[3], source: line };
	return { leftOperand: parseNumber(elements[0]), rightOperand: parseNumber(elements[2]), operation: commandMap[elements[1]], target: elements[4] , source: line };
}

function isNumber(input){ return !isNaN(input) || input === 0; }

function processCommands(commands){
	wires['b'] = 46065;
	for (var i = 0; i < commands.length; i++){
		var command = commands[i];
		if (wires[command.target]) continue; //skip if already treated;
		
		if (wires[command.leftOperand] != null) command.leftOperand = wires[command.leftOperand];
		if (wires[command.rightOperand] != null) command.rightOperand = wires[command.rightOperand];		

		var execute = false;
		switch (command.operation){
			case 'NO-OP':
			case 'NOT':
				execute = isNumber(command.leftOperand);
				break;
			default: 
				execute = isNumber(command.leftOperand)  && isNumber(command.rightOperand);			 
				break;
		}
		if (execute)
			wires[command.target] = command.operation.call(this, command.leftOperand, command.rightOperand);
	}
	if (wires['a']) console.log('Value of Wire A is ' + wires['a']);
	else processCommands(commands);
}

fs.readFile(filename, 'utf8', function(err, data) {
	var lines = data.split('\n'),
		commands = lines.map(parseCommand);
		
		processCommands(commands);			
});