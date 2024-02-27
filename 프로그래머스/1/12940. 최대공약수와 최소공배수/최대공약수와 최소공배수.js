function solution(n, m) {
    const input = [n, m].sort((a, b) => a - b);
    let gcd = 1;
    for(let i = 2; i <= input[0]; i++){
        if(!(n % i) && !(m % i)) gcd = i;
    }
    if (gcd === 1) return [1, n * m];
    return [gcd, input[1] * (input[0] / gcd)];
}