# [level 0] 수열과 구간 쿼리 1 - 181883

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181883)

### 성능 요약

메모리: 36.6 MB, 시간: 6.85 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2024년 1월 7일 13:39:6

<br/>

### 코드리뷰

#### 🤔 나의 풀이

```js
function solution(arr, queries) {
  queries.forEach(([s, e]) => {
    arr = arr.map((v, i) => {
      if (i >= s && i <= e) return v + 1;
      else return v;
    });
  });
  return arr;
}
```

- `forEach` 내부에 `map` 메서드를 이용하여 조건을 통해 반환해준다.

<br>

#### 🆕 다른 사람 풀이: `while` 반복문과 후위 증감 연산자 `++` 이용

```js
function solution(arr, queries) {
  queries.forEach(([v, e]) => {
    while (v <= e) arr[v++]++;
  });
  return arr;
}
```

1. `forEach` 내부에 `while` 반복문을 이용한다.
2. e보다 v가 작을 경우 `arr[v]`의 값에 1을 더한다. <br/> 이때, `v`에 후위 증감 연산자가 사용되어 연산이 완료되면 `v`값이 1 올라간다.
3. `v + 1` 과 `e`를 비교하여 반복문을 처리하며, 위 단계를 계속 반복한다.

<br/>

✨ 결론

- 메서드를 하나만 이용하며, if 문을 통해 조건을 나누었을 때보다 간결하다.
- 후위 증감 연산자와 `arr[v++]++` 통해서 배열 원소값을 더 할 수 있다는 점을 기억하자!

<br/>

### 문제 설명

<p>정수 배열 <code>arr</code>와 2차원 정수 배열 <code>queries</code>이 주어집니다. <code>queries</code>의 원소는 각각 하나의 <code>query</code>를 나타내며, <code>[s, e]</code> 꼴입니다.</p>

<p>각 <code>query</code>마다 순서대로 <code>s</code> ≤ <code>i</code> ≤ <code>e</code>인 모든 <code>i</code>에 대해 <code>arr[i]</code>에 1을 더합니다.</p>

<p>위 규칙에 따라 <code>queries</code>를 처리한 이후의 <code>arr</code>를 return 하는 solution 함수를 완성해 주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>arr</code>의 길이 ≤ 1,000

<ul>
<li>0 ≤ <code>arr</code>의 원소 ≤ 1,000,000</li>
</ul></li>
<li>1 ≤ <code>queries</code>의 길이 ≤ 1,000

<ul>
<li>0 ≤ <code>s</code> ≤ <code>e</code> &lt; <code>arr</code>의 길이</li>
</ul></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>arr</th>
<th>queries</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[0, 1, 2, 3, 4]</td>
<td>[[0, 1],[1, 2],[2, 3]]</td>
<td>[1, 3, 4, 4, 4]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>각 쿼리에 따라 <code>arr</code>가 다음과 같이 변합니다.</li>
</ul>
<table class="table">
        <thead><tr>
<th>i</th>
<th>queries[i]</th>
<th>arr</th>
</tr>
</thead>
        <tbody><tr>
<td>-</td>
<td>-</td>
<td>[0, 1, 2, 3, 4]</td>
</tr>
<tr>
<td>0</td>
<td>[0,1]</td>
<td>[1, 2, 2, 3, 4]</td>
</tr>
<tr>
<td>1</td>
<td>[1,2]</td>
<td>[1, 3, 3, 3, 4]</td>
</tr>
<tr>
<td>2</td>
<td>[2,3]</td>
<td>[1, 3, 4, 4, 4]</td>
</tr>
</tbody>
      </table>
<ul>
<li>따라서 [1, 3, 4, 4, 4]를 return 합니다.</li>
</ul>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
