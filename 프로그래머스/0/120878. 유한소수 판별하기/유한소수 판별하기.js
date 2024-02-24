function solution(a, b) {
    let max = 1;
    for (let i = 2; i <= Math.max(a, b); i++){
        if(!(a % i) && !(b % i)) max = i;
    }
    b /= max;
    while (!(b % 2)) b /= 2;
    while (!(b % 5)) b /= 5;
    return b == 1 ? 1 : 2;
}