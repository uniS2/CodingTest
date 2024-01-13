function solution(arr, flag) {
    let X = [];
    flag.map((f, i) => {
        if(f) {
            let count = arr[i] * 2;
            while(count > 0){
                X.push(arr[i]);
                count--;
            }
        }
        else {
            X = X.slice(0, -arr[i])
        }
    })
    return X;
}