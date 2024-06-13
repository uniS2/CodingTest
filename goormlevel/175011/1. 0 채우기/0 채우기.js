const readline = require('readline');

function solution(n, data) {
	let i = 0;
	let j = 0;
	let sum = 0;
	
	for(i; i < n; i++) {
		if (data[i].includes(0)) {
			j = data[i].indexOf(0);
			break;
		}
	}
	
	sum += data[i].reduce((a, b) => a + b, 0);
	sum += data.map(arr => arr[j]).reduce((a, b) => a + b, 0);
	console.log(sum);
	
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N = null;
	const data = [];
	
	for await (const line of rl) {
		if(!N) {
			N = +line;
		} else {
			data.push(line.split(' ').map(Number));
		}
		rl.close();
	}
	
	solution(N, data);
	process.exit();
})();
