/**
 * Solution of Advent of Code, day 11 Challenge
 * http://adventofcode.com/day/11
 * Part 2
 */
var pwd = "hepxxyzz",
	isNotGood = true;
pwd = (parseInt(pwd, 36) + 1).toString(36).replace(/0/, 'a');
while(isNotGood) {
	pwd = (parseInt(pwd, 36) + 1).toString(36).replace(/0/, 'a');
	isNotGood = !/(abc|bcd|cde|def|efg|fgh|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/.test(pwd);
	isNotGood = isNotGood || /[ilo]/.test(pwd);
	isNotGood = isNotGood || !/(.)\1.?(.)\2/.test(pwd);
}
console.log(pwd);