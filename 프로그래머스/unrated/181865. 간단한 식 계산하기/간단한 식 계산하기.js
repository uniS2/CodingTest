function solution(binomial) {
    const cal = binomial.split(' ')
    return cal[1] === '+' ? +cal[0] + +cal[2]
        : cal[1] === '-' ? cal[0] - cal[2] : cal[0] * cal[2];
}