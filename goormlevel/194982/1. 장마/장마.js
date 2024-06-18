const readline = require('readline');

function solution(height, input, house, rainy) {
	// 장마 날짜
	let drain = Array.from({length: house}, () => 0);
	
	for(let day = 0; day < rainy; day++){
		let [s, e] = input[day];
		for(let i = s - 1; i < e; i++) {
			height[i]++;
			drain[i] = 3;
		}
		
		if((day + 1) % 3 === 0) {
			height = height.map((h, index) => drain[index] > 0 ? h -= 1 : h);
		}
		
		drain = drain.map((d) => d > 0 ? d -= 1 : d);
	}
	
	return height.join(' ');	
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let [N, M] = [null, null];
	let k = null;
	const data = [];
	
	for await (const line of rl) {
		if(!N) {
			[N, M] = line.split(' ').map(Number);
		} else if (!k) {
			k = line.split(' ').map(Number);
		} else {
			data.push(line.split(' ').map(Number));
		}
	}
	
	console.log(solution(k, data, N, M));
	process.exit();
})();
