function solution(x) {
    // 문자 풀이 - for 문 (입력값에 비해 코드가 복잡)
    /* let str = (x+'').split('');
    let sum = 0;
    for(let i = 0; i < str.length; i++ ){
        sum += +str[i];
    }
    return (x % sum === 0); */
    
    // 문자 풀이 - split(), reduce()
    let sum =  (x+'').split('').reduce((acc,x)=> acc + parseInt(x) ,0)
    return (x % sum === 0);
    
    
    // 숫자 풀이
    /* let sum = 0;
    let init = x;
    do{
        sum += x % 10;
        x = Math.floor(x / 10);
    } while(x)
    return (init % sum === 0); */
}