# [level 0] 이진수 더하기 - 120885

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120885)

### 성능 요약

메모리: 33.3 MB, 시간: 0.11 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2024년 03월 14일 16:34:47

---

### 코드리뷰

#### 간단한 풀이

> 메모리: 33.5 MB, 시간: 0.03 ms

```js
function solution(bin1, bin2) {
    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
```

**😀 메서드를 이용한 간단한 풀이**

`parseInt` 메서드를 사용하여 10진수로 변환한 후, 두 수의 합을 구한다.  
두 수의 합을 `toString` 메서드를 사용하여 2진수로 변환하여 답을 도출한다.

<br>

#### 직접 구현

> 메모리: 33.3 MB, 시간: 0.11 ms

```js
function solution(bin1, bin2) {
  bin1 = [...bin1].reverse().map((b) => Boolean(Number(b)));
  bin2 = [...bin2].reverse().map((b) => Boolean(Number(b)));
  let result = [];

  for (let index = 0; index < Math.max(bin1.length, bin2.length); index++) {
    if (!result[index]) {
      if (bin1[index] && bin2[index]) {
        result[index] = false;
        result[index + 1] = true;
      } else if (bin1[index] || bin2[index]) {
        result[index] = true;
      } else {
        result[index] = false;
      }
    } else {
      if (bin1[index] && bin2[index]) {
        result[index + 1] = true;
      } else if (bin1[index] || bin2[index]) {
        result[index] = false;
        result[index + 1] = true;
      }
    }
  }

  return result.reverse().map(Number).join("");
}
```

**😀 구현 방법**

1. 두 수를 spread 연산자와 `reverse` 메서드를 통해 순서를 거꾸로한 배열로 만든다. 그 후 `map` 메서드와 `Boolean` 자료형을 통해 2진수 0 또는 1을 true, false 불리언 값으로 나타내준다.

<br />

2. result 배열을 만들어 각 조건에 해당하는 true 또는 false 값을 넣어준다.
   1. result[index] 값이 false일 경우
      1. bin1과 bin2 모두 true일 경우: `result[index] = false, result[index + 1] = true;`
      2. bin1 또는 bin2 하나가 true일 경우: `result[index] = true;`
      3. bin1과 bin2 모두 false일 경우: `result[index] = false;`
   2. result[index] 값이 true일 경우
      1. bin1과 bin2 모두 true일 경우: `result[index + 1] = true;`
      2. bin1 또는 bin2 하나가 true일 경우: `result[index] = false, result[index + 1] = true;`

<br />

3. result 배열을 `reverse` 메서드를 통해 다시 순서를 돌린 후, `map` 메서드와 `Number` 자료형을 통해 0 또는 1의 2진수로 나타내준다. <br /> 그 후 `join` 메서드를 통해 하나의 문자열(숫자)로 답을 도출한다.

---

### 문제 설명

<p>이진수를 의미하는 두 개의 문자열 <code>bin1</code>과 <code>bin2</code>가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>return 값은 이진수를 의미하는 문자열입니다.</li>
<li>1 ≤ <code>bin1</code>, <code>bin2</code>의 길이 ≤ 10</li>
<li><code>bin1</code>과 <code>bin2</code>는 0과 1로만 이루어져 있습니다.</li>
<li><code>bin1</code>과 <code>bin2</code>는 "0"을 제외하고 0으로 시작하지 않습니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>bin1</th>
<th>bin2</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"10"</td>
<td>"11"</td>
<td>"101"</td>
</tr>
<tr>
<td>"1001"</td>
<td>"1111"</td>
<td>"11000"</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>10 + 11 = 101 이므로 "101" 을 return합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>1001 + 1111 = 11000 이므로 "11000"을 return합니다.</li>
</ul>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
