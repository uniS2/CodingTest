function solution(d, budget) {
    for(let i in d){
        let max = d.sort((a, b) => a - b).slice(0, +i + 1).reduce((a, b) => a + b, 0);
        if (max === budget) {
            return +i + 1;
        } 
        else if (max > budget) {
            return +i;
        }
    }
    return d.length;
}