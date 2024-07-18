const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n').map(i => i.trim());

function guide(data) {
  const [N, M] = data.shift().split(' ');
  const list = data.splice(0, N);
  const map = new Map(list.map((l, i) => [l, i + 1]))
  let answer = [];

  for (let i = 0; i < M; i++) {
    if (Number.isNaN(+data[i])) {
      answer.push(map.get(data[i]));
    } else {
      answer.push(list[data[i] - 1]);
    }
  }
  return answer.join('\n');
}

console.log(guide(input));