# [Lv.0] 직사각형 넓이 구하기 - 120860

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120860#qna)

### 성능 요약

메모리: 33.4 MB, 시간: 0.05 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

---

### 코드리뷰

#### 문제 해결

```js
function solution(dots) {
  dots.sort((a, b) => a[0] - b[0]);
  const [one, two, three] = dots;
  return Math.abs((one[0] - three[0]) * (one[1] - two[1]));
}
```

- 처음에는 dots 배열을 one, two, three, four로 배열 구조 분해 할당하여 index 1 값을 모두 찾아내어 다음과 같이 계산하면 된다 생각하였다.
  `return Math.abs((one[1] - two[1]) * (three[1] - four[1]));`

  <br>

- 허나 넓이는 가로 _ 세로 이기 때문에 한 번은 index 0 을, 한 번은 index 1을 서로 계산한 값을 반환해주어야 한다. <br> 따라서, 최종 풀이는 다음과 같다.
  `return Math.abs((one[0] - three[0]) _ (one[1] - two[1]));`

---

### 제출 일자

2023년 11월 2일 3:9:32

### 문제 설명

<p>2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 <code>dots</code>가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li><code>dots</code>의 길이 = 4</li>
<li><code>dots</code>의 원소의 길이 = 2</li>
<li>-256 &lt; <code>dots[i]</code>의 원소 &lt; 256</li>
<li>잘못된 입력은 주어지지 않습니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>dots</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[[1, 1], [2, 1], [2, 2], [1, 2]]</td>
<td>1</td>
</tr>
<tr>
<td>[[-1, -1], [1, 1], [1, -1], [-1, 1]]</td>
<td>4</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>좌표 [[1, 1], [2, 1], [2, 2], [1, 2]] 를 꼭짓점으로 갖는 직사각형의 가로, 세로 길이는 각각 1, 1이므로 직사각형의 넓이는 1 x 1 = 1입니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>좌표 [[-1, -1], [1, 1], [1, -1], [-1, 1]]를 꼭짓점으로 갖는 직사각형의 가로, 세로 길이는 각각 2, 2이므로 직사각형의 넓이는 2 x 2 = 4입니다.</li>
</ul>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
