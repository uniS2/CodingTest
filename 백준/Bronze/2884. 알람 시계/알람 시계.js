const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let [H, M] = fs.readFileSync(path, 'utf8').trim().split(' ');

if ((M < 45)) {
  H = (H == 0) ? 23 : H - 1;
  M = 60 - Math.abs(M - 45)
} else {
  M -= 45;
}

console.log(`${H} ${M}`)