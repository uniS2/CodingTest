function solution(n) {
    let result = 0;
    for(let x = 1; x <= n; x++){
        if(n === x**2){
            return (x+1)**2;
        } else {
            result = -1;
        }
    }
    return result;
}