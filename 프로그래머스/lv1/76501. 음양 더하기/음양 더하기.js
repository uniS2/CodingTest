function solution(absolutes, signs) {
    let sum = 0;
    for(let i=0; i < absolutes.length; i++){
        signs[i] ? absolutes[i] = absolutes[i] : absolutes[i] = -absolutes[i];
        sum += absolutes[i];
    }
    return sum;
}