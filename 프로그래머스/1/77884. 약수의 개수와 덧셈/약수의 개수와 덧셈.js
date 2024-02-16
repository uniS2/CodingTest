function solution(left, right) {
    const number = Array(right - left + 1).fill(left).map((v, i) => v + i);
    return number.map(n => {
        let temp = n;
        let count = 0;
        while(temp > 0){
            if (n % temp === 0) count++;
            temp--;
        }
        return (count % 2) ? -n : n;
    }).reduce((a, b) => a + b, 0)
    
}