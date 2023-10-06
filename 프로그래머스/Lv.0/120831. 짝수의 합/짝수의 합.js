function solution(n) {
    let sum = 0;
    for(let i = 2; i <= n; i+=2){
        sum += i;
    }
    return sum;
    
    // 실행속도: for문 > 수열 방식
}