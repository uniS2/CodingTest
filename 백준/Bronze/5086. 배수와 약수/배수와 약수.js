let input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
input = input.map(v => v.trim()).slice(0, -1);

const answer = input.map(i => {
  let [a, b] = i.split(' ');
  if (!(b % a)) return 'factor';
  else if (!(a % b)) return 'multiple';
  else return 'neither';
})

console.log(answer.join('\n'));