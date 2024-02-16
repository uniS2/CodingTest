function solution(n) {
    const str = "수박";
    return (n % 2) ? str.repeat(n/2) + str[0] : str.repeat(n/2);
}