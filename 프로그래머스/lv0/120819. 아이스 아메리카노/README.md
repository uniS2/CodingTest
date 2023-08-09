# [level 0] 아이스 아메리카노 - 120819 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120819) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.03 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

---

### 코드리뷰
#### 처음 풀이
```js
// 처음 풀이
function solution(money) {
    let arr = [Math.floor(money / 5500), Math.floor(money % 5500)];
    return arr;
}
```
- 처음 풀이 방식 : Math.floor() 를 아메리카노 잔 수와 거스름돈 모두에 적용하였다.
- 허나, 거스름돈은 항상 정수처리 되기 때문에 Math.floor() 처리를 다시 해줄 필요가 없다.
- 따라서, 밑과 같이 풀이를 바꾸어 준다. 필요한 곳에만 조건 또는 메서드를 적용하자!

#### 최종 풀이
```js
// 최종 풀이
function solution(money) {
    let arr = [Math.floor(money / 5500), money % 5500];
    return arr;
}
```

---


### 문제 설명

<p>머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 <code>money</code>가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return&nbsp;하도록 solution 함수를 완성해보세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>0 &lt; <code>money</code> ≤ 1,000,000</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>money</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>5,500</td>
<td>[1, 0]</td>
</tr>
<tr>
<td>15,000</td>
<td>[2, 4000]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>5,500원은 아이스 아메리카노 한 잔을 살 수 있고 잔돈은 0원입니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>15,000원은 아이스 아메리카노 두 잔을 살 수 있고 잔돈은 4,000원입니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
