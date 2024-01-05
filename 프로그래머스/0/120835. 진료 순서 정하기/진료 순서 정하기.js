function solution(emergency) {
    const answer = [...emergency].sort((a, b) => b - a);
    return emergency.map((n, i) => answer.indexOf(n) + 1)
}