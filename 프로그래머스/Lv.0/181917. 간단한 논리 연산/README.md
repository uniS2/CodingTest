# [level 0] 간단한 논리 연산 - 181917

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181917)

### 성능 요약

메모리: 33.4 MB, 시간: 0.03 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

---

### 코드리뷰

#### 나의 풀이

```js
function solution(x1, x2, x3, x4) {
  const res1 = x1 === false && x2 === false ? false : true;
  const res2 = x3 === false && x4 === false ? false : true;
  return res1 === false || res2 === false ? false : true;
}
```

- 처음 풀이 방식: 논리 연산자의 특징을 활용하지 않아 식이 깔끔하지 않다. 또한 논리 연산자에 대해 모르는 사람처럼 보인다.

#### 다른 사람 풀이

```js
return (x1 || x2) && (x3 || x4);
```

- 풀이 설명: 논리 연산자의 특징을 활용하여 값을 반환할 수 있도록 한다.
- [논리 연산자 | Info](https://ko.javascript.info/logical-operators) : OR 연산자 `T||`, AND 연산자 `F&&`

---

### 제출 일자

2023년 10월 2일 11:3:20

### 문제 설명

<p>boolean 변수 <code>x1</code>, <code>x2</code>, <code>x3</code>, <code>x4</code>가 매개변수로 주어질 때, 다음의 식의 true/false를 return 하는 solution 함수를 작성해 주세요.</p>

<ul>
<li>(<code>x1</code> ∨ <code>x2</code>) ∧ (<code>x3</code> ∨ <code>x4</code>)</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>x1</th>
<th>x2</th>
<th>x3</th>
<th>x4</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>false</td>
<td>true</td>
<td>true</td>
<td>true</td>
<td>true</td>
</tr>
<tr>
<td>true</td>
<td>false</td>
<td>false</td>
<td>false</td>
<td>false</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li><p>예제 1번의 <code>x1</code>, <code>x2</code>, <code>x3</code>, <code>x4</code>로 식을 계산하면 다음과 같습니다.</p>

<p>(<code>x1</code> ∨ <code>x2</code>) ∧ (<code>x3</code> ∨ <code>x4</code>) ≡ (F ∨ T) ∧ (T ∨ T) ≡ T ∧ T ≡ T</p>

<p>따라서 true를 return 합니다.</p></li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li><p>예제 2번의 <code>x1</code>, <code>x2</code>, <code>x3</code>, <code>x4</code>로 식을 계산하면 다음과 같습니다.</p>

<p>(<code>x1</code> ∨ <code>x2</code>) ∧ (<code>x3</code> ∨ <code>x4</code>) ≡ (T ∨ F) ∧ (F ∨ F) ≡ T ∧ F ≡ F</p>

<p>따라서 false를 return 합니다.</p></li>
</ul>

<hr>

<ul>
<li><p>∨과 ∧의 진리표는 다음과 같습니다.</p>
<table class="table">
        <thead><tr>
<th>x</th>
<th>y</th>
<th>x ∨ y</th>
<th>x ∧ y</th>
</tr>
</thead>
        <tbody><tr>
<td>T</td>
<td>T</td>
<td>T</td>
<td>T</td>
</tr>
<tr>
<td>T</td>
<td>F</td>
<td>T</td>
<td>F</td>
</tr>
<tr>
<td>F</td>
<td>T</td>
<td>T</td>
<td>F</td>
</tr>
<tr>
<td>F</td>
<td>F</td>
<td>F</td>
<td>F</td>
</tr>
</tbody>
      </table></li>
</ul>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
