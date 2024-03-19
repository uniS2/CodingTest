const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

const [_, k] = input[0].split(' ');
const score = input[1].split(' ').sort((a, b) => Number(b) - Number(a));
console.log(score[k - 1])