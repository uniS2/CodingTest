function solution(quiz) {
    quiz = quiz.map(q => q.split(' '));
    return quiz.map(q => {
        if(((q[1] === '+') ? +q[0] + +q[2] : q[0] - q[2]) === +q[4]) return 'O';
        else return 'X';
    })
}