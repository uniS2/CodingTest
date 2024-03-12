const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim();

const length = 2 ** input + 1;
return console.log(length ** 2)