let input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

input = input.map(i => i.split(' ').map(Number));
const max = Math.max(...input.flat());

input.forEach((_, i) => {
  for (let j = 0; j < input.length; j++) {
    if (input[i][j] == max) return console.log(`${max}\n${i + 1} ${j + 1}`);
  }
}
)