function solution(array, n) {
    const cal = array.map(i => Math.abs(i - n));
    if ([...cal].sort()[0] === [...cal].sort()[1]) {
        return array[cal.indexOf(Math.min(...cal))] > array[cal.lastIndexOf(Math.min(...cal))]
            ? array[cal.lastIndexOf(Math.min(...cal))] : array[cal.indexOf(Math.min(...cal))];
    }
    return array[cal.indexOf(Math.min(...cal))];
}