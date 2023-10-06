# [level 1] x만큼 간격이 있는 n개의 숫자 - 12954 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12954) 

### 성능 요약

메모리: 33.8 MB, 시간: 0.11 ms

### 구분

코딩테스트 연습 > 연습문제

### 코드리뷰
[나의 풀이]
- 빈 배열을 만든 후 초기값 1로 시작하는 for문을 돌려 순차적으로 곱하여 배열에 넣어 반환하는 방법을 선택하였다.   

[다른 풀이: Array() 생성자와 fill(), map() 메서드 활용]
-  ```Array.prototype.fill()```: value[, start[, end]]
  ```javascript
        return Array(n).fill(x).map((x, i) => x*(i + 1))
  ```
1. ```Array()``` 생성자를 활용하여 주어진 n개 만큼의 길이를 가지는 배열을 만든다.
2. ```fill()``` 메서드를 활용하여 비어있는 n개의 배열 요소를 주어진 정수 x로 채운다.
3. ```map()``` 메서드를 이용하여 ```(x, index)``` 값을 ```x * (index+1)``` 의 결과로 바꾸어 return 시켜준다.

[총평]
Array 메서드를 이용하는 방식도 매력적이나 for문을 이용해 push()하는 방법과 실행단계적인 면에서 장점이 없다고 판단하였다.
따라서, 메서드를 이용하는 방법을 알아두되 for문이 편하다면 for문을 사용하도록 한다.

### 문제 설명

<p>함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.</p>

<h4>제한 조건</h4>

<ul>
<li>x는 -10000000 이상, 10000000 이하인 정수입니다.</li>
<li>n은 1000 이하인 자연수입니다.</li>
</ul>

<h4>입출력 예</h4>
<table class="table">
        <thead><tr>
<th>x</th>
<th>n</th>
<th>answer</th>
</tr>
</thead>
        <tbody><tr>
<td>2</td>
<td>5</td>
<td>[2,4,6,8,10]</td>
</tr>
<tr>
<td>4</td>
<td>3</td>
<td>[4,8,12]</td>
</tr>
<tr>
<td>-4</td>
<td>2</td>
<td>[-4, -8]</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
