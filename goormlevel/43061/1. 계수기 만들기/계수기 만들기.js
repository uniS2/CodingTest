const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let N = null;
let A = null;
let B = null;
let K = null;

const solution = (n, max, init, count) => {
	let counter = [...init];
	
	for(let press = 0; press < count; press++) {
		counter[n - 1]++;
		
		for(let i = n - 1; i > 0; i--) {
			if(counter[i] > max[i]) {
				counter[i] = 0;
				counter[i - 1]++;
			}
		}
		
		if(counter[0] > max[0]) {
			counter[0] = 0;
		}
	}
	
	return counter.join('');
}

rl.on("line", function(line) {
	if(!N) {
		N = +line;
	} else if(!A) {
		A = line.split(' ').map(Number);
	} else if(!B) {
		B = line.split(' ').map(Number);
	} else {
		K = +line;
		rl.close();
	}
}).on("close", function() {
	console.log(solution(N, A, B, K));
	process.exit();
});