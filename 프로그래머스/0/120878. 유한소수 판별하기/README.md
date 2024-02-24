# [level 0] 유한소수 판별하기 - 120878

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120878)

### 성능 요약

메모리: 33.4 MB, 시간: 0.15 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2024년 02월 24일 18:03:38

---

### 코드리뷰

#### 나의 풀이

```js
function solution(a, b) {
  let max = 0;
  for (let i = 2; i <= Math.max(a, b); i++) {
    if (!(a % i) && !(b % i)) max = i;
  }
  if (max) b /= max;
  while (!(b % 2) || !(b % 5)) {
    if (!(b % 2)) b /= 2;
    if (!(b % 5)) b /= 5;
  }
  return b == 1 ? 1 : 2;
}
```

🤔 **나의 풀이**

- 문제에 집중하자! 약수가 아니라 **최대공약수** !!

<br/>

#### 다른 사람 풀이

```js
function solution(a, b) {
  let max = 1;
  for (let i = 2; i <= Math.max(a, b); i++) {
    if (!(a % i) && !(b % i)) max = i;
  }
  b /= max;
  while (!(b % 2)) b /= 2;
  while (!(b % 5)) b /= 5;
  return b == 1 ? 1 : 2;
}
```

✅ **비교**

- `while` 반복문 조건을 나누어 해당 조건일 경우만 빠르게 로직 처리를 해줄 수 있다.
- 성능이 메모리 33.5 MB, 시간 0.21 ms 에서 메모리 33.4 MB, 시간 **0.15 ms** 으로 크게 줄어듦을 확인하였다!

<br/>

#### ✨ 결론

- 반복문 조건은 가능한 간단하게, 해당 케이스만 지정해주자 😀

---

### 문제 설명

<p>소수점 아래 숫자가 계속되지 않고 유한개인 소수를 유한소수라고 합니다. 분수를 소수로 고칠 때 유한소수로 나타낼 수 있는 분수인지 판별하려고 합니다. 유한소수가 되기 위한 분수의 조건은 다음과 같습니다.</p>

<ul>
<li>기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재해야 합니다.</li>
</ul>

<p>두 정수 <code>a</code>와 <code>b</code>가 매개변수로 주어질 때, a/b가 유한소수이면 1을, 무한소수라면 2를 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li><code>a</code>, <code>b</code>는 정수</li>
<li>0 &lt; <code>a</code>&nbsp;≤&nbsp;1,000</li>
<li>0 &lt; <code>b</code>&nbsp;≤ 1,000</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>a</th>
<th>b</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>7</td>
<td>20</td>
<td>1</td>
</tr>
<tr>
<td>11</td>
<td>22</td>
<td>1</td>
</tr>
<tr>
<td>12</td>
<td>21</td>
<td>2</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>분수 7/20은 기약분수 입니다. 분모 20의 소인수가 2, 5 이기 때문에 유한소수입니다. 따라서 1을 return합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>분수 11/22는 기약분수로 나타내면 1/2 입니다. 분모 2는 소인수가 2 뿐이기 때문에 유한소수 입니다. 따라서 1을 return합니다.</li>
</ul>

<p>입출력 예 #3</p>

<ul>
<li>분수 12/21는 기약분수로 나타내면 4/7 입니다. 분모 7은 소인수가 7 이므로 무한소수입니다. 따라서 2를 return합니다.</li>
</ul>

<hr>

<h5>Hint</h5>

<ul>
<li>분자와 분모의 최대공약수로 약분하면 기약분수를 만들 수 있습니다.</li>
<li>정수도 유한소수로 분류합니다.</li>
</ul>

<hr>

<p>※ 공지 - 2022년 11월 10일 테스트 케이스가 추가되었습니다. 기존에 제출한 코드가 통과하지 못할 수도 있습니다.</p>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
