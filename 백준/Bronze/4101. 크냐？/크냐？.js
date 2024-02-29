const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

let result = '';
input.pop();
input.forEach((i) => {
  i = i.split(' ');
  result += (+i[0] > +i[1] ? 'Yes' : 'No') + '\n';
})
console.log(result);