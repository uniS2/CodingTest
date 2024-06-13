// Run by Node.js
const readline = require('readline');

function solution(exp) {
	const calOne = eval(exp[0]);
	const calTwo = eval(exp[1]);
	
	return Math.max(calOne, calTwo);
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		const exp = line.split(' ');
		console.log(solution(exp));
		rl.close();
	}

	process.exit();
})();
