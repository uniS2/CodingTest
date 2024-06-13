// Run by Node.js
function solution(data) {
	const S = [...data].map(s => s == s.toLowerCase() ? s.toUpperCase() : s.toLowerCase()).join('');
	console.log(S);
}
 
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const data = [];
	
	for await (const line of rl) {
		data.push(...line.split(' '));
		rl.close();
	}
	
	solution(data[1]);
	process.exit();
})();
