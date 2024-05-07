const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let [, ...input] = fs.readFileSync(path, 'utf8').trim().split('\n').map(str => str.trim());

const result = [...new Set(input)].sort().sort((a, b) => a.length - b.length);

return console.log(result.join('\n'));