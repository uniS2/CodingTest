function solution(n)
{
    let str = String(n);
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += Number(str.slice(i-1, i));
    }
    return sum;
}