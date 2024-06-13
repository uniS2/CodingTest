function solution(data) {
	N = data.shift();
	M = data.shift();
	let set = new Set();
	let min = 0;
	let i = 0;

	while(true) {
		if(i === M) {
			console.log(-1);
			break;
		}
		
		if(!set.has(data[i])) set.add(data[i]);
		
		if(set.size == N) {
			console.log(++min);
			break;
		}
		i++;
		min++;
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
	}
	
	solution(data);
	process.exit();
})();
