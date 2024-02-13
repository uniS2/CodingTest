let input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

input = input.map(i => i.split(' ').map(Number));
const max = Math.max(...input.flat());

for (let i = 0; i < 9; i++) {
  if (input[i].includes(max)) return console.log(`${max}\n${i + 1} ${input[i].indexOf(max) + 1}`);
}