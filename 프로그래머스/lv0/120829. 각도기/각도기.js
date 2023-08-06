function solution(angle) {
    return [0, 90, 91, 180].filter(item => angle >= item).length;
}