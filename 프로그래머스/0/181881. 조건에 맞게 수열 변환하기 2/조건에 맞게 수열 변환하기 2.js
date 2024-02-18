function solution(arr) {
    let x = 0
    while(arr.length){
        arr = arr.map(a => {
            if ((a >= 50) && (a % 2 == 0)){
                return a / 2;
            } else if ((a < 50) && (a % 2)){
                return a * 2 + 1;
            }
        }).filter(a => a);
        x++;
    }
    return --x;
}