const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [M, N] = fs.readFileSync(path, 'utf8').trim().split('\n').map(Number);

let decimal_list = [];

for (let i = M; i <= N; i++) {
  if (i === 1) continue;

  let decimal = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      decimal = false;
      break;
    }
  }
  if (decimal) {
    decimal_list.push(i);
  }
}


if (decimal_list.length === 0) {
  console.log(-1);
} else {
  const sum = decimal_list.reduce((a, b) => a + b, 0);
  console.log(sum + '\n' + decimal_list[0])
}