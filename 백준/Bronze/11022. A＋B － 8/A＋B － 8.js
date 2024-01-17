const [T, ...test] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

for (let i = 0; i < T; i++) {
  const [A, B] = test[i].split(' ');
  console.log(`Case #${i + 1}: ${A} + ${B} = ${+A + +B}`)
}