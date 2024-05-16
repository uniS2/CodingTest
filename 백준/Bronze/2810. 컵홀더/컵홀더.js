const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [N, info] = fs.readFileSync(path, 'utf8').trim().split('\n');

const max = info.replaceAll('LL', 1).length + 1;

console.log(max >= N ? N : max);