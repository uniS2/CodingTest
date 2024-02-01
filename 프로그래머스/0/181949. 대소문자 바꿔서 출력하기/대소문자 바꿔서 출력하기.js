const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line;
}).on('close',function(){
    const result = [...input].map(i => {
        if(i == i.toUpperCase()){
            return i.toLowerCase();
        } else return i.toUpperCase();
    })
    console.log(result.join(''));
});