function solution(arr) {
    var stk = [];
    let i = 0;
    while(i < arr.length){
        if(!stk.length || (stk.length && stk.slice(-1) < arr[i])) stk.push(arr[i++]);
        else stk.pop();
    }
    return stk;
}