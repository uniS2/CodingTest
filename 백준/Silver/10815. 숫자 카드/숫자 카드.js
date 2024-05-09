const fs = require('fs');
let input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

input.shift()
input.splice(1, 1)

let set = new Set(input[0].split(' '))
let mList = input[1].split(' ')

let result = '';

for (let i = 0; i < mList.length; i++) {
  result += set.has(mList[i]) ? '1 ' : '0 ';

} console.log(result);
