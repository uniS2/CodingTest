function solution(n) {
    const arr = Array(n - 1).fill(2).map((v, i) => v + i);
    return arr.filter(a => {
        for(let i = 2; i < a; i++){
            if(a % i === 0) return 1;
        }
    }).length;
}