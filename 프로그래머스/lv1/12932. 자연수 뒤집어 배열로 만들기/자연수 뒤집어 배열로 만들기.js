function solution(n) {
    let str = (n+'').split('');
    let arr = [];
    for (let i = str.length-1; i >= 0; i--){
        arr.push(+str.slice(i,i+1));
    }
    return arr;
}