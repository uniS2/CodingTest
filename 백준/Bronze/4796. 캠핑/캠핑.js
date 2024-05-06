const fs = require('fs');
let input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

let result = '';

for (let i = 0; i < input.length - 1; i++) {
  const [L, P, V] = input[i].split(' ').map(Number);
  result += `Case ${i + 1}: ${L * Math.floor(V / P) + (V % P >= L ? L : V % P)}` + '\n'
}

console.log(result);