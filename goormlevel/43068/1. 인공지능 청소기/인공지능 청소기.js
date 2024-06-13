const solution = (test) => {
	let answer = '';
	for(let i = 0; i < test.length; i++) {
		const [X, Y, N] = test[i].split(' ');
		const coor = Math.abs(X) + Math.abs(Y);
		if(coor <= N && Math.abs(coor - N) % 2 === 0) {
			answer += 'YES';
		} else {
			answer += 'NO';
		}
		answer += '\n';
	}
	return answer.trim();
}

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let T = null;
const test = [];
let count = 0;

rl.on("line", function(line) {
	if(!T) {
		T = +line;
	} else {
		test.push(line);
		count++;
	}
	if(count === T) {
		rl.close();
	}
}).on("close", function() {
	console.log(solution(test));
	process.exit();
});