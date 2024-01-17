const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

for (let i = 0; i < input.length; i++) {
  const [A, B] = input[i].split(' ').map(Number);
  console.log(A + B)
}