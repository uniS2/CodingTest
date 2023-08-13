function solution(n) {
    // let arr = [];
    // for(let i = 1; i <= n; i+=2) arr.push(i);
    // return arr
    return Array(Math.ceil(n/2)).fill(1).map((n,i) => n + i*2);
}