function solution(i, j, k) {
    let answer = [];
    
    for(let a = i; a <= j; a++){
        answer.push(String(a).split(''))
    }
    
    return answer.flat().filter(n => n == k).length;
}