function solution(numbers) {
    const average = numbers.reduce((acc, cur)=> acc+cur, 0)/numbers.length;    
    return average;
}