function solution(slice, n) {
    const def = Math.floor(n / slice);
    return (n % slice) ? def + 1 : def; 
}