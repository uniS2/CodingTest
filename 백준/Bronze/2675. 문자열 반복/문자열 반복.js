const [T, ...test] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

let P = '';
for (let i = 0; i < +T; i++) {
  let [R, S] = test[i].split(' ');
  P += [...S].map(s => s.repeat(R)).join('') + '\n';
}
return console.log(P);