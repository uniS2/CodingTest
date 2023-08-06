function solution(n, k) {
    // 한 줄로 표시하기: if(n >= 10) k = k - Math.floor(n/10);
    
    return 12000*n + 2000*(k - Math.floor(n/10));
}