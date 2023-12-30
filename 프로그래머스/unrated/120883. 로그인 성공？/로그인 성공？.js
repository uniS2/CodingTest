function solution(id_pw, db) {
    for([key, value] of db) {
        if (id_pw[0] === key) {
            if (id_pw[1] === value) {
                return "login"
            } else {
                return "wrong pw"
            }
        }
    }
    return "fail"
}