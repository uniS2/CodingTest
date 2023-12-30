# [level 0] 배열 회전시키기 - 120844

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120844)

### 성능 요약

메모리: 33.4 MB, 시간: 0.03 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2023년 12월 31일 0:2:5

### 코드리뷰

- 배열 메서드 `push`, `pop`, `unshift`, `shift` 를 이용한 문제 풀이

<br />

- 실제 코테에서는 변수 선언을 굳이 해줄 필요가 없지만, 실제 코딩에서는 배열 복사 후 로직을 작성합니다.

<br />

- 다른 사람 풀이 중 밑과 같은 로직을 발견하였지만, 큰 프로그램 안 (멀티스레딩 환경의 경우) 에서는 작성시 의도하지 않은 값이 바뀔 수 있기 때문에 권장하지 않습니다. <br/> 다만, 코테는 단순한 문제이기 때문에 성능을 위해 메모리 공간 차지를 방지하고자 사용한다 결론지었습니다. <br /> [참고: 프로그래머스 다른 사람의 풀이 댓글](https://school.programmers.co.kr/learn/courses/30/lessons/120844/solution_groups?language=javascript), wrtn 대화
  ```js
  if ("right" == direction) {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }
  ```

### 문제 설명

<p>정수가 담긴 배열 <code>numbers</code>와 문자열&nbsp;<code>direction</code>가 매개변수로 주어집니다. 배열 <code>numbers</code>의 원소를 <code>direction</code>방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>3 ≤ <code>numbers</code>의 길이 ≤ 20</li>
<li><code>direction</code>은 "left" 와 "right" 둘 중 하나입니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>numbers</th>
<th>direction</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[1, 2, 3]</td>
<td>"right"</td>
<td>[3, 1, 2]</td>
</tr>
<tr>
<td>[4, 455, 6, 4, -1, 45, 6]</td>
<td>"left"</td>
<td>[455, 6, 4, -1, 45, 6, 4]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li><code>numbers</code> 가 [1, 2, 3]이고 <code>direction</code>이 "right" 이므로 오른쪽으로 한 칸씩 회전시킨 [3, 1, 2]를 return합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li><code>numbers</code> 가 [4, 455, 6, 4, -1, 45, 6]이고 <code>direction</code>이 "left" 이므로 왼쪽으로 한 칸씩 회전시킨 [455, 6, 4, -1, 45, 6, 4]를 return합니다.</li>
</ul>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
