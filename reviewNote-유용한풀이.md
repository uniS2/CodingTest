# 유용한 풀이방법

- [유용한 풀이방법](#유용한-풀이방법)
  - [문자열 밀기: 문자열 2배에서 `indexOf` 사용](#문자열-밀기-문자열-2배에서-indexof-사용)

## 문자열 밀기: 문자열 2배에서 `indexOf` 사용

```js
// 프로그래머스: 120921. 문자열 밀기
let solution = (A, B) => (B + B).indexOf(A);
```

- 변수 B를 두 번 반복할 경우 오른쪽으로 밀렸을때의 경우를 반드시 포함하게 된다.
- 따라서, 메서드 `indexOf`를 통해 밀어야 하는 최소 횟수를 구할 수 있다.
