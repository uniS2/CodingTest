# [level 0] 짝수는 싫어요 - 120813 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120813) 

### 성능 요약

메모리: 33.6 MB, 시간: 0.04 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

---

### 코드리뷰
#### 첫번째 풀이
```js
function solution(n) {
    let arr = [];
    for(let i = 1; i <= n; i+=2) arr.push(i);
    return arr
}
```
- for 문을 이용하여 홀수를 구한 후, 빈 배열 값을 가지는 arr 변수에 push 메서드를 사용하여 넣어준다. => `return arr;`

#### 두번째 풀이
```js
function solution(n) {
    return Array(Math.ceil(n/2)).fill(1).map((n,i) => n + i*2);
}
```
- Array 생성자와 fill 메서드를 활용하여 1로 채워진 홀수값 길이의 배열을 구한 후, map 메서드를 이용한다. `Math.ceil()` 메서드 활용.
- 생성된 배열의 원소와 인덱스 값을 이용하여 원하는 홀수값으로 채워진 배열을 반환한다.
- 첫번째 풀이보다 0.01ms 성능이 느려지기 때문에 추천하지 않는다! 다만, 메서드 풀이가 기존 풀이보다 간단하다 생각될 경우 사용할 것을 개인적으로 권장한다.

---
### 문제 설명

<p>정수 <code>n</code>이 매개변수로 주어질 때, <code>n</code> 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>n</code> ≤ 100</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>10</td>
<td>[1, 3, 5, 7, 9]</td>
</tr>
<tr>
<td>15</td>
<td>[1, 3, 5, 7, 9, 11, 13, 15]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 #1</p>

<ul>
<li>10 이하의 홀수가 담긴 배열 [1, 3, 5, 7, 9]를 return합니다.</li>
</ul>

<p>입출력 #1</p>

<ul>
<li>15 이하의 홀수가 담긴 배열 [1, 3, 5, 7, 9, 11, 13, 15]를 return합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
