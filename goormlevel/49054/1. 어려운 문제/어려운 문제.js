const readline = require('readline');

function add(arr) {
	let sum = 0;
	for(let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function factorial(n) {
	let multi = [...String(n)].reverse().map(Number);
	let digit = 0;
	
	for(let i = 2; i < n; i++) {
		multi = multi.map((num) => {
			let temp = num * i + Number(digit);
			if (temp < 10) {
				digit = 0;
				return temp;
			} else {
				digit = Math.trunc(temp / 10);
				return temp % 10;
			}
		})

		if(digit > 0) {
			digit = [...String(digit)].reverse().map(Number)
			multi.push(...digit);
			digit = 0;
		}
	}
	return add(multi);
}

function solution(n) {
	let A = factorial(n);
	if (A === 0) return 1;
	while(A > 10) {
		A = String(A).split('').reduce((acc, cur) => +acc + +cur, 0);
	}
	return A;
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		const N = Number(line);
		console.log(solution(N));
		rl.close();
	}
	
	process.exit();
})();
