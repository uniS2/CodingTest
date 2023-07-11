function solution(s){
    s = s.toLowerCase();
    let countP = 0;
    let countY = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'p'){
            countP += 1;
        } else if (s[i] === 'y') {
            countY += 1;
        }
    }
    if (countP === countY){
        return true;
    } else if (countP === 0 && countY === 0){
        return true;
    } else return false;
}