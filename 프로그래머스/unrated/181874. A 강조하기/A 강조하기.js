function solution(myString) {
    return myString.includes('a') ? myString.toLowerCase().replaceAll('a', 'A') : myString.toLowerCase().replaceAll('a', 'A');
}