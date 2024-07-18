const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n').map(i => i.trim());

function guide(data) {
  const [N, M] = data[0].split(' ').map(Number);
  let hash = new Map();
  let answer = [];

  for (let i = 1; i <= N; i++) {
    hash.set(input[i], i)
  }

  for (let i = N + 1; i <= N + M; i++) {
    if (Number.isNaN(+data[i])) {
      answer.push(hash.get(data[i]));
    } else {
      answer.push(data[data[i]]);
    }
  }
  return answer.join('\n');
}

console.log(guide(input));