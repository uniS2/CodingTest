function solution(s){
    let result = [0, 0];
    
    for(let i = 0; i < s.length; i++){
        s[i] === '(' ? result[0]++ : result[1]++;
        if (result[1] > result[0]) return false;
    }
    
    return result[0] === result[1];
}