const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path, 'utf8').trim().split('\n');

function sort(input) {
  input.shift();
  const output = input.map(s => s.split(' ').map(Number));
  output.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
  return output.map(s => `${s[0]} ${s[1]}`).join('\n');
}

console.log(sort(input));