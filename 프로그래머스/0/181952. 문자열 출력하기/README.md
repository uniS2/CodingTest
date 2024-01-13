# [level 0] 문자열 출력하기 - 181952

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181952)

### 성능 요약

메모리: 32.2 MB, 시간: 43.97 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2024년 1월 13일 21:41:9

<br />

### 코드리뷰

#### 😃 나의 풀이

```js
const readline = require("readline"); // Node.js 표준 입력/출력 모듈
const rl = readline.createInterface({
  // readline 인터페이스를 생성
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  //  사용자가 한 줄을 입력하고 엔터를 칠 때마다 이 함수가 호출
  input = line;
}).on("close", function () {
  // 사용자가 입력을 종료(ctrl+D 또는 ctrl+C)하면 이 함수가 호출
  console.log(input);
});
```

<br>

#### ✨ 다른 출력 방식

```js
const readline = require("readline");
const rl = readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", console.log); // 사용자가 한 줄을 입력하고 엔터를 칠 때마다 이 함수가 호출됩니다. 이 함수에서는 사용자가 입력한 내용을 즉시 콘솔에 출력
```

- `.on("line", console.log)` 통해 바로 출력할 수 있다.

<br />

### 문제 설명

<p>문자열 <code>str</code>이 주어질 때, <code>str</code>을 출력하는 코드를 작성해 보세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>str</code>의 길이 ≤ 1,000,000</li>
<li><code>str</code>에는 공백이 없으며, 첫째 줄에 한 줄로만 주어집니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>

<p>입력 #1</p>
<div class="highlight"><pre class="codehilite"><code>HelloWorld!
</code></pre></div>
<p>출력 #1</p>
<div class="highlight"><pre class="codehilite"><code>HelloWorld!
</code></pre></div>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
