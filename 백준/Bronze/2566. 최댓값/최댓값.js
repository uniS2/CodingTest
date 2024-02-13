let input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

input = input.map(i => i.split(' ').map(Number));
const max = Math.max(...input.flat());

input.forEach((v, i) => {
  if (v.includes(max)) return console.log(`${max}\n${i + 1} ${v.indexOf(max) + 1}`);
})