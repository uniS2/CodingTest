const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

function math(num) {
  let answer = num[0] + num[1] - num[2];
  answer += '\n';
  answer += '' + num[0] + num[1] - num[2];
  return answer;
}
console.log(math(input));