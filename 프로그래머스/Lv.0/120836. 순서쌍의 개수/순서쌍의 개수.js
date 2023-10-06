function solution(n) {
    let count = 0;
    for(let i=0; i<n; i++){
        if(n / i === Math.floor(n / i)){
            count += 1;
        }
    }
    return count;
}