function solution(numbers) {
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i <= 9; i++){
        sum1 += i;
    }
    for(let value of numbers){
        sum2 += value;
    }
    return sum1 - sum2
}