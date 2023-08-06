# [level 0] 편지 - 120898 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120898) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.02 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

---

### 코드리뷰
#### 처음 풀이
```js
// 처음 풀이
function solution(message) {
    return message.split('').length * 2;
}
```
- 처음 풀이 방식 : `split` 메서드 이용하여 배열로 반환 => `length` 메서드 이용하여 원하는 값 구하기
- `String.length` : 문자열의 길이를 반환하는 메서드.
- 따라서 `split` 메서드를 사용하여 배열로 반환후 길이를 반환할 필요없이 바로 `length` 메서드를 적용한다.

#### 최종 풀이
```js
// 최종 풀이
function solution(message) {
    return message.length * 2;
}
```

---

### 문제 설명

<p>머쓱이는 할머니께 생신 축하 편지를 쓰려고 합니다. 할머니가 보시기 편하도록 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며, 편지를 가로로만 적을 때, 축하 문구 <code>message</code>를 적기 위해 필요한 편지지의 최소 가로길이를 return 하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>공백도 하나의 문자로 취급합니다.</li>
<li>1 ≤ message의 길이 ≤ 50</li>
<li>편지지의 여백은 생각하지 않습니다.</li>
<li><code>message</code>는 영문 알파벳 대소문자, ‘!’, ‘~’ 또는 공백으로만 이루어져 있습니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>message</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"happy birthday!"</td>
<td>30</td>
</tr>
<tr>
<td>"I love you~"</td>
<td>22</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li><code>message</code>의 글자 수가 15개로 최소 가로 30cm의 편지지가 필요합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li><code>message</code>의 글자 수가 11개로 최소 가로 22cm의 편지지가 필요합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
