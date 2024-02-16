function solution(phone_number) {
    let asterisk = phone_number.slice(0, -4).replaceAll(/\d/g, '*');
    return asterisk + phone_number.slice(-4)
}