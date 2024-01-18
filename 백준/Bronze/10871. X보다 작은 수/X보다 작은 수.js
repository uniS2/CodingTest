const [count, A] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const X = count.split(' ')[1];
console.log(A.split(' ').filter(a => +a < X).join(' '))