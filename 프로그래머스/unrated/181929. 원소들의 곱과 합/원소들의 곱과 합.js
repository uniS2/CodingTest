function solution(num_list) {
    const product = num_list.reduce((a, b) => a * b, 1);
    const square = Math.pow(num_list.reduce((a, b) => a + b, 0), 2)
    return Number(product < square)
}