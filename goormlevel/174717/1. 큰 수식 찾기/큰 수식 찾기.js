// Run by Node.js
const readline = require('readline');

function caculation(expression) {	
	return eval(expression);
}

function solution(data) {
	const calOne = caculation(data[0]);
	const calTwo = caculation(data[1]);
	
	if (calOne >= calTwo) {
		console.log(calOne);
	} else {
		console.log(calTwo);
	}
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const data = [];
	
	for await (const line of rl) {
		data.push(...line.split(' '))
		rl.close();
	}
	
	solution(data);
	process.exit();
})();
