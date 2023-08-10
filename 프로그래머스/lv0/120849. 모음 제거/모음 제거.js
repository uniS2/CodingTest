function solution(my_string) {
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    vowel.forEach(v => my_string = my_string.replaceAll(v, ''));
    return my_string;
}