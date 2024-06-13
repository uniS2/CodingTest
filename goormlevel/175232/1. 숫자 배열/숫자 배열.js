// Run by Node.js
const readline = require('readline');

function solution(n, array) {
	for(let i = 1; i < n * n; i += n) {
		array += new Array(n).fill(i).map((num, index) => num + index).join(' ') + '\n';
	}
	console.log(array.trim());
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N = 0;
	let numArray = '';
	
	for await (const line of rl) {
		N = Number(line);
		rl.close();
	}
	
	solution(N, numArray);
	process.exit();
})();
