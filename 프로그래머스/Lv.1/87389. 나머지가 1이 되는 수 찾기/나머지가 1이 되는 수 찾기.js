function solution(n) {
    let x = 1;
    if ( n >= 3 && n <= 1_000_000){
        while(x++){
            if (n % x === 1){
                return x;
            }
        }
    }
}