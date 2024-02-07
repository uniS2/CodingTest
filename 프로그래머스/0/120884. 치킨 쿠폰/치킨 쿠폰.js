function solution(chicken) {
    let remainder = 0;
    let result = 0;
    while (chicken >= 10) {
        remainder = Math.trunc(chicken % 10);
        chicken = Math.trunc(chicken / 10);
        result += chicken;
        chicken += remainder;
    }
    return result;
}