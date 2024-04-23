function solution(n) {
    let result = n;
    let list = Array(n).fill(0).map((v, i) => v + i + 1);
    
    for(let i = 2; i * i <= n; i++) {        
        for (let j = i + i; j <= n; j = j + i) {
                list[j - 1] = 0;
        } 
    }
    
    return list.filter(a => a).length - 1;
}