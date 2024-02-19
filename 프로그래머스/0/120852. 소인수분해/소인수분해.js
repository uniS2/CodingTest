function solution(n) {
    let result = [];
    let i = 2;
    while(i <= n){
        if (result.includes(n)) break;
        if (n % i == 0) {
            !result.includes(i) && result.push(i);
            n /= i;
        } else i++;
    }
    return result;
}