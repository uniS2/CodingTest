function solution(A, B) {
    let result = 0;
    
    for(let i = 0; i < A.length; i++){
        if(B == A) return result;
        A = A.slice(-1) + A.slice(0, -1);
        result++;
    }
    return -1;
}