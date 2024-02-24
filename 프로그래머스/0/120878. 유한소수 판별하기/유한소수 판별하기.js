function solution(a, b) {
    let max = 0;
    for (let i = 2; i <= Math.max(a, b); i++){
        if(!(a % i) && !(b % i)) max = i;
    }
    if (max) b /= max;
    while(!(b % 2) || !(b % 5)) {
        if (!(b % 2)) b /= 2;
        if (!(b % 5)) b /= 5;
    }
    return b == 1 ? 1 : 2;
}