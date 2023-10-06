function solution(num1, num2) {
    num1 >= 0 && num1 <= 10000;
    num2 >= 0 && num2 <= 10000;
    let answer;
    if (num1 == num2) {
        answer = 1;
    } else {
        answer = -1;
    }
    return answer;
}