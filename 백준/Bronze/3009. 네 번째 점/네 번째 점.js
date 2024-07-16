const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path, 'utf8').trim().split('\n').map(i => i.split(' '));

let x = input.map(i => +i[0]).sort();
let y = input.map(i => +i[1]).sort();
let answer = `${x[0]} `;

if (x[0] == x[1]) {
  answer = `${x[2]} `;
}

if (y[0] === y[1]) {
  answer += y[2];
} else {
  answer += y[0];
}

console.log(answer);