# [Lv.0] 덧셈식 출력하기 - 181947 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181947) 

### 성능 요약

메모리: 32.1 MB, 시간: 46.39 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

---

### 코드리뷰
#### 처음 풀이
```js
input = line.split(' ');
console.log(`${input[0]} + ${input[1]} = ${Number(input[0]) + Number(input[1])}`);
```
- 처음 풀이 방식: 들어온 input 값을 배열 원본 형태 그대로 사용하였다.
- 문제점: 식을 한눈에 알아보기 힘들다.

#### 최종 풀이
```js
[a, b] = line.split(' ');
console.log(`${a} + ${b} = ${Number(a) + Number(b)}`);
```
- 수정 방식: 배열의 구조 분해 할당을 이용해 식을 한눈에 알아볼 수 있도록 하였다.
- 참고 자료: [구조분해할당/배열구조분해/선언에서분리한할당|MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%EC%84%A0%EC%96%B8%EC%97%90%EC%84%9C_%EB%B6%84%EB%A6%AC%ED%95%9C_%ED%95%A0%EB%8B%B9)
---



### 문제 설명

<p>두 정수 <code>a</code>, <code>b</code>가 주어질 때 다음과 같은 형태의 계산식을 출력하는 코드를 작성해 보세요.</p>
<div class="highlight"><pre class="codehilite"><code>a + b = c
</code></pre></div>
<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>a</code>, <code>b</code> ≤ 100</li>
</ul>

<hr>

<h5>입출력 예</h5>

<p>입력 #1</p>
<div class="highlight"><pre class="codehilite"><code>4 5
</code></pre></div>
<p>출력 #1</p>
<div class="highlight"><pre class="codehilite"><code>4 + 5 = 9
</code></pre></div>

> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
