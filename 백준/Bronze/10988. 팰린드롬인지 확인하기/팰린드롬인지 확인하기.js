const word = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

const reverse = [...word].reverse().join('');
console.log(Number(word === reverse));