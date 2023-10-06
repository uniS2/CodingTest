function solution(price, money, count) {
    const sum = price * Array(count).fill(1).map((v,i) => v+i).reduce((a,b) => a+b,0);
    return sum > money ? sum - money : 0;
}