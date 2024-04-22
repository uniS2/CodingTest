function solution(number, limit, power) {    
    let list = [];
    
    for(let k = 1; k <= number; k++){
        list[k - 1] = 0;
        for(let cur = 1; cur * cur <= k ; cur++){
            if (cur * cur === k){
                list[k - 1]++;
            } else if (k % cur === 0){
                list[k - 1] += 2;
            }
        }
    }
    
    return list.reduce((acc, cur) => acc + (cur > limit ? power : cur), 0);
}