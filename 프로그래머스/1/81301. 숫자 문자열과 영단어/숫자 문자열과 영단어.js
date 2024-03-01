function solution(s) {
    const word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    word.forEach((w, index) => {
        if(s.includes(w)) s = s.replaceAll(w, index);
    })
    return Number(s);
}