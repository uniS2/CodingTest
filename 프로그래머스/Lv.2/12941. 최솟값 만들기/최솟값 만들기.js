function solution(A,B){
    A.sort((a, b) => a - b);    // sort() 시 문자열 정렬 주의
    B.sort((a, b) => b - a);
    return A.reduce((acc, cur, i) => acc + cur * B[i], 0)
}