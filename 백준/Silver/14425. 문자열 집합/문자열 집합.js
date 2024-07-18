const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

function count(input) {
  const [N, M] = input.shift().split(' ');
  const S = new Set(input.splice(0, N));
  let count = 0;

  for (let i = 0; i < M; i++) {
    if (S.has(input[i])) {
      count++;
    }
  }
  return count;
}

console.log(count(input));