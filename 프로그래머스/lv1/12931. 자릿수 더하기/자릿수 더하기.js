function solution(n)
{
    // 문자 풀이
    // 1. 나의 풀이: 문자열 변환 후 slice() 메서드 이용
    /*
    let str = String(n);
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += Number(str.slice(i-1, i));
    }
    return sum;
    */
    
    // 2. split() (배열)과 reduce() 메서드 이용
    return (n+'').split('').reduce((acc, cur) => (acc + parseInt(cur)), 0)
    
    // 3. 숫자 풀이
    /*
    do {
        sum += n%10;
        n = Math.floor(n/10);
    } while(n > 0);
    
    return sum;
    */
}