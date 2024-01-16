const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

for (let i = 1; i < 10; i++) {
  console.log(`${input} * ${i} = ${input * i}`)
}