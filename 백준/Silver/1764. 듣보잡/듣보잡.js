const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

function list(data) {
  const [N, M] = data.shift().split(' ').map(Number);
  const nonHear = new Set(data.splice(0, N));
  let answer = [];


  for (let i = 0; i < M; i++) {
    if (nonHear.has(data[i])) {
      answer.push(data[i]);
    }
  }
  answer.sort()
  answer.unshift(answer.length);

  return answer.join('\n');
}

console.log(list(input));