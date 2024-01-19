let input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

const a = new Set(input.map(n => n % 42))
return console.log(a.size);