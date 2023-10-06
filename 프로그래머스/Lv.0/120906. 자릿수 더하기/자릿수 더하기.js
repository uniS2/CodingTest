function solution(n) {
    let sum = 0;
    
    while (n > 0){
        let value = n % 10
        n = Math.floor(n/10);
        sum += value;
    }
    
    return sum;
}