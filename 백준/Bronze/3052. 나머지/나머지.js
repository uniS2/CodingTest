let input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

// 풀이1: Set
const a = new Set(input.map(n => n % 42))
console.log(a.size);

// 풀이2: forEach 문, 메서드 entries
let result = {};
input.map(n => n % 42).forEach(i => {
  result[i] = 1;
})
return console.log(Object.entries(result).length);