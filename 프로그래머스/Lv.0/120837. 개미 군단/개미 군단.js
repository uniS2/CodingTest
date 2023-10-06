function solution(hp){
    const task = [5, 3, 1];
    let result = 0;
    task.forEach(i => {
        result += (hp /i) ? Math.floor(hp / i) : 0;
        hp -= Math.floor(hp / i) * i;
    })
    return result;
}