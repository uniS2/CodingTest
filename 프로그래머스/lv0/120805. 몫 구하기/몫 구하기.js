function solution(num1, num2) {
    num1 > 0 && num1 <= 100;
    num2 > 0 && num2 <= 100;
    let answer = Math.floor(num1 / num2);
    return answer;
}