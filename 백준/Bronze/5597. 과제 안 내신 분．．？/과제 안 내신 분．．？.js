const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

let answer = Array(30).fill(1).map((a, i) => a + i);
const student = answer.filter(a => !input.includes(a));
console.log(student[0] + '\n' + student[1])