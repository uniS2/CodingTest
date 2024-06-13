// Run by Node.js
function solution(data) {
	N = data.shift();
	M = data[0];
	let set = new Set();
	let i = 0;

	while(true) {
		i++;
		if(!set.has(data[i])) set.add(data[i]);
		
		if(set.size == N) {
			console.log(i);
			break;
		}
		if(i == M) {
			console.log(-1);
			break;
		}
	}
}

const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	const data = [];
	let N = 0;
	let M = 0;
	
	for await (const line of rl) {
		data.push(...line.split(' ').map(Number));
		rl.close();
	}
	
	solution(data);
	process.exit();
})();
