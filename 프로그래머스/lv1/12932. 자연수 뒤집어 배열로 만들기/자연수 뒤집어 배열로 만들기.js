function solution(n) {
    // 문자풀이
    let str = (n+'').split(''); // 배열
    let arr = [];
    
    // 1. for문
    /* for (let i = str.length-1; i >= 0; i--){
        arr.push(+str[i]);
        arr.unshift(+str[i]); // 이 방식은 for문 오름차순을 그대로 사용할 수 있음
    }
    return arr; */
    
    // 2. reverse(), map()
    // Array.prototype.reverse(): 배열의 순서 반전
    // Array.prototype.map(): 배열 내 각각 보든 요소에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
    // return str.reverse().map(a => parseInt(a));
    
    // 3. 숫자풀이 - do, while
    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);
    return arr;
}