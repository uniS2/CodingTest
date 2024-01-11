# [Bronze II] 단어의 개수 - 1152

[문제 링크](https://www.acmicpc.net/problem/1152)

### 성능 요약

메모리: 18304 KB, 시간: 156 ms

### 분류

구현, 문자열

### 제출 일자

2024년 1월 12일 01:56:21

<br />

### 코드리뷰

#### 🤔 처음 풀이

```js
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(path, "utf8").trim();
console.log(input.split(" ").length);
```

- 입력값을 메서드 `split`을 사용하여 길이, 즉 단어 개수를 반환해준다.
- 틀린점이 무엇일까? 🤔

<br>

#### 😃 반례와 풀이법

✅ **반례**

```js
// 입력값 공백
console.log("".split(" ")); // ['']
console.log("".split(" ").length); // 1

// Output
// 1

// Answer
// 0
```

- 다음과 같이 입력값이 공백일 경우 메서드 `trim`을 통해 빈 문자열로 들어오지만 `split(" ")`으로 배열을 반환하면서 길이 1을 가지는 배열 `['']`가 반환되버린다.
- 따라서, 입력값이 빈 문자열일 경우와 빈 문자열이 아닌 경우 출력값을 나눈다.

<br />

✅ **최종 풀이**

```js
const input = fs.readFileSync(path, "utf8").trim();
console.log(input === "" ? 0 : input.split(" ").length);
```

#### ✨ 결론

- 항상 반례를 생각하자!

<br />

### 문제 설명

<p>영어 대소문자와 공백으로 이루어진 문자열이 주어진다. 이 문자열에는 몇 개의 단어가 있을까? 이를 구하는 프로그램을 작성하시오. 단, 한 단어가 여러 번 등장하면 등장한 횟수만큼 모두 세어야 한다.</p>

### 입력

 <p>첫 줄에 영어 대소문자와 공백으로 이루어진 문자열이 주어진다. 이 문자열의 길이는 1,000,000을 넘지 않는다. 단어는 공백 한 개로 구분되며, 공백이 연속해서 나오는 경우는 없다. 또한 문자열은 공백으로 시작하거나 끝날 수 있다.</p>

### 출력

 <p>첫째 줄에 단어의 개수를 출력한다.</p>
