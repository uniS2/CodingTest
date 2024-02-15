const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

const avg = input.reduce((a, b) => a + b, 0) / input.length;

const medium = input.sort((a, b) => a - b)[2];

console.log(`${avg}\n${medium}`);