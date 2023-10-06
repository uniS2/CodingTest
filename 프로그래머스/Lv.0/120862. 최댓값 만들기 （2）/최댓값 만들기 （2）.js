function solution(numbers) {
    const arr = numbers.sort((a,b) => a - b);
    return (arr[0] * arr[1] > arr.at(-1) * arr.at(-2))
        ? arr[0] * arr[1] : arr.at(-1) * arr.at(-2);
}