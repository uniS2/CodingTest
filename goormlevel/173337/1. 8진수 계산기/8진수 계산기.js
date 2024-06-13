// Run by Node.js
function solution(data) {
	data.shift();
	const sum = data.reduce((a, b) => +a + +b, 0);
	console.log(sum.toString(8));
}

const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N = null;
	const integer = [];
	
	for await (const line of rl) {
		integer.push(...line.split(' '));
	}
	
	solution(integer);
	process.exit();
})();
