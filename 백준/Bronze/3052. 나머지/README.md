# [Bronze II] 나머지 - 3052

[문제 링크](https://www.acmicpc.net/problem/3052)

### 성능 요약

메모리: 9336 KB, 시간: 124 ms

### 분류

사칙연산, 수학

### 제출 일자

2024년 1월 19일 15:03:22

### 문제 설명

<p>두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다. </p>

<p>수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.</p>

### 입력

 <p>첫째 줄부터 열번째 줄 까지 숫자가 한 줄에 하나씩 주어진다. 이 숫자는 1,000보다 작거나 같고, 음이 아닌 정수이다.</p>

### 출력

 <p>첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.</p>

---

### 코드리뷰

#### 🤓 나의 풀이

```js
let input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map(Number);

// 풀이1: Set
const a = new Set(input.map((n) => n % 42));
console.log(a.size);

// 풀이2: forEach 문, 메서드 entries
let result = {};
input
  .map((n) => n % 42)
  .forEach((i) => {
    result[i] = 1;
  });
return console.log(Object.entries(result).length);
```

✅ **`Set`, `size` **

- 객체 `Set`과 `map` 메서드를 사용하여 42로 나눈 나머지를 계산한다.
- `size` 접근자 속성을 활용하여 서로 다른 나머지의 개수를 구한다.
- Time: **172 ms** , Memory: 9336 KB

✅ **`forEach`, `entries()`**

- `forEach` 반복문과 `map` 메서드를 사용하여 42로 나눈 나머지를 계산한다.
- `entries` 메서드와 `length` 메서드를 활용하여 서로 다른 나머지의 개수를 구한다.
- Time: **124 ms** , Memory: 9336 KB -> 🤓 시간이 더 적게 걸림을 확인할 수 있다!

#### ✨ 결론

- 주어진 수들에서 서로 다른 수의 개수를 구할 경우 `for` 반복문을 활용해 계산하자.
- 반복문을 활용한 풀이법이 어려울 경우 `Set` 을 사용하여 알맞게 정답을 구할 수 있다.

---
