const readline = require('readline');

const count = (list, n) => {
	return list.split(' ').slice(1).filter(el => Number(el) === n).length;
}

const solution = (input) => {
	const N = Number(input.shift());
	let output = '';
	
	for(let i = 0; i < N * 2; i += 2) {
		let result = 'D';
		
		for(let j = 4; j >= 1; j--){
			const aNum = count(input[i], j);
			const bNum = count(input[i + 1], j);
			if(aNum != bNum) {
				result = aNum > bNum ? 'A' : 'B';
				break;
			}
		}
		output += result + '\n';
	}
	
	return output;
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const input = [];
	
	for await (const line of rl) {
		input.push(...line.split('\n'));
		//rl.close();
	}
	
	console.log(solution(input));
	process.exit();
})();
