function solution(participant, completion) {
    participant.sort();
    completion.sort();
    return participant.filter((p, index) => p !== completion[index])[0];
}