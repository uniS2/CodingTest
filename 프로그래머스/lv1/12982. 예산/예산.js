function solution(d, budget) {
    d.sort((a, b) => a - b);
    for(let i in d){
        console.log(d.slice(0, +i + 1))
        if (d.slice(0, +i + 1).reduce((a, b) => a + b, 0) === budget) {
            return +i + 1;
        } 
        else if (d.slice(0, +i + 1).reduce((a, b) => a + b, 0) > budget) {
            return +i;
        }
    }
    return d.length;
}