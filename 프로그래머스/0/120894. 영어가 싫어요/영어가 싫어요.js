function solution(numbers) {
    const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for(let i = 0; i < arr.length; i++){
        numbers = numbers.replaceAll(arr[i], i);
    }
    return Number(numbers);
}