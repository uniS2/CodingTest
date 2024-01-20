const [, ...input] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const answer = input.map(i => i[0] + i.trim().slice(-1)).join('\n');
console.log(answer);