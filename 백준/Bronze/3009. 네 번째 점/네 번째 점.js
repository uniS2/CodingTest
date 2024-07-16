const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(i => i.split(' '));

function solution(arr) {
  const x = arr.map(v => +v[0]);
  const y = arr.map(v => +v[1]);

  let answer = x.filter((v) => x.indexOf(v) === x.lastIndexOf(v))[0] + ' ';
  answer += y.filter((v) => y.indexOf(v) === y.lastIndexOf(v))[0];

  return answer;
}

console.log(solution(input));