const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

let result = [];
input.slice(0, -1).forEach((n) => {
  let cur = [];
  for (let i = 1; i < n; i++) {
    if (n % i === 0) cur.push(i);
  }
  if (cur.reduce((a, b) => +a + +b, 0) == n) {
    result.push(`${Number(n)} = ${cur.join(' + ')}`);
  } else result.push(`${Number(n)} is NOT perfect.`);
})
console.log(result.join('\n'));