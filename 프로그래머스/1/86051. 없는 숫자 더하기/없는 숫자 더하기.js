function solution(numbers) {
    const sum = 45;
    return sum - numbers.reduce((acc,cum) => acc+cum,0)
}