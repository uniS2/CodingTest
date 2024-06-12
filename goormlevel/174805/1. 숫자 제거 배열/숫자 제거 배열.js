// Run by Node.js
const solution = (data) => {
  console.log(data);
};

const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N = null;
	let K = null;
	let count = 0;
	let integer = [];

	for await (const line of rl) {
		if (!N) {
      N = +line.split(' ')[0];
			K = +line.split(' ')[1];
		} else {
      integer = line.split(' ').filter(int => !int.includes(K));
    }
		count++;
		if (N === count) {
      rl.close();
    }
	}
	
	solution(integer.length);
	process.exit();
})();
