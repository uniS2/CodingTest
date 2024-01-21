const S = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

let a = Array(26).fill(-1);
for (let s of S) {
  if (a[s.charCodeAt() - 97] === -1) {
    a[s.charCodeAt() - 97] = S.indexOf(s);
  }
}
return console.log(a.join(' '));