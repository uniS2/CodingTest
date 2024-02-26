function solution(numer1, denom1, numer2, denom2) {
    let answer = [];
    if (!(denom1 % denom2)) {
        numer2 *= denom1 / denom2;
        answer.push(denom1);
    } else if (!(denom2 % denom1)) {
        numer1 *= denom2 / denom1;
        answer.push(denom2);
    } else {
        numer1 *= denom2;
        numer2 *= denom1;
        answer.push(denom1 * denom2);
    }
    answer.unshift(numer1 + numer2);
    
    for(let i = answer[0]; i > 1; i--){
        if(!(answer[0] % i) && !(answer[1] % i)) {
            answer = [answer[0] / i, answer[1] / i];
        }
    }
    return answer;
}