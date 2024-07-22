const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

function math(num) {
  let answer = [num[0] + num[1] - num[2]];
  answer.push('' + num[0] + num[1] - num[2]);
  return answer.join('\n');
}
console.log(math(input));