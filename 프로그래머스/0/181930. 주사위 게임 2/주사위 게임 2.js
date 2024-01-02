function solution(a, b, c) {
    const sum = a + b + c;
    const powTwo = Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)
    const powThree = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3)
    
    if (a === b && b === c) return sum * powTwo * powThree;
    else if (a !== b && b !== c && c !== a) return sum;
    else return sum * powTwo;
}