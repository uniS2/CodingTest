# [level 1] 평균 구하기 - 12944 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12944) 

### 성능 요약

메모리: 33.7 MB, 시간: 0.07 ms

### 구분

코딩테스트 연습 > 연습문제

### 코드리뷰  
  
[변수 sum을 선언만 해주면 오류가 나는 이유?]
- ```let sum;``` 식만 내려줄 경우 `undefined` 값을 출력한다.
- 따라서, 변수 sum의 초기값으로 0을 할당하여 준 후, for문을 통해 합계를 계산하여 다시 자기 자신으로 반환하여 준다.  
  
[조원 코드 - 민성님]
```js
while(arr[x] != null){
        answer += arr[x];
        x++;
}
```  
- 자바스크립트는 배열이 가지고 있지 않은 n번째 index에 접근하면 undefined를 출력한다.
- undefined 값과 null은 동등연산으로 비교할 경우 true를 반환하는 특징을 가진다. 따라서, `undefined 값은 null과 같지 않다!` 라는 조건에 false가 떨어지게 되고 반복문이 종료된다.

### 문제 설명

<p>정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.</p>

<h4>제한사항</h4>

<ul>
<li>arr은 길이 1 이상, 100 이하인 배열입니다.</li>
<li>arr의 원소는  -10,000 이상 10,000 이하인 정수입니다.</li>
</ul>

<h4>입출력 예</h4>
<table class="table">
        <thead><tr>
<th>arr</th>
<th style="text-align: center">return</th>
</tr>
</thead>
        <tbody><tr>
<td>[1,2,3,4]</td>
<td style="text-align: center">2.5</td>
</tr>
<tr>
<td>[5,5]</td>
<td style="text-align: center">5</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges