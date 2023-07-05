# [level 1] 나머지가 1이 되는 수 찾기 - 87389 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/87389) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.03 ms

### 구분

코딩테스트 연습 > 월간 코드 챌린지 시즌3

### 채점결과

- 기존 풀이 과정
- 최종값을 전달해 줄 변수 answer를 따로 선언하여 for 문에서 설정했던 변수 X값이 해당 조건을 만족할 때 x 값을 변수 answer에 할당해주는 방식으로 풀었다.
또한 break 문을 사용하여 for문이 더 이상 작동할 수 없게 작성해야한다고 생각하였다.

- 1차 수정
- 변수 answer를 따로 선언하여 메모리 공간을 추가 소모하는 대신에 변수 x값을 바로 return하여 최종값을 도출해내도록 하였다.
- 또한 solution 함수가 return 키워드를 만나면 스택 프레임에서 빠져 나오기 때문에, for 문 내부에서 if문 조건을 만족시킬 경우 해당 함수를 바로 종료하도록 수정하였다.

- 최종 수정
- while 문과 ++ 증감연산자를 이용하여 x++ 식을 조건으로 넣어 해당 조건을 만족할 경우 return 명령문을 통해 결과값을 도출하도록 하였다.

- 보충 개념
  *스택 프레임(Stack Frame)이란? 스택 영역에 저장되는 함수의 정보. 함수 호출시 스택에 함수의 지역변수, 매개변수, 복귀 주소 등 입력. -> Call Stack.
  *스택 영역: 함수의 호출과 관계된 지역 변수, 매개 변수가 저장되는 영역. 호출 시 할당되며, 함수가 종료되면 소멸.


### 문제 설명

<p>자연수 <code>n</code>이 매개변수로 주어집니다. <code>n</code>을 <code>x</code>로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 <code>x</code>를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>3 ≤ <code>n</code> ≤ 1,000,000</li>
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
<td>3</td>
</tr>
<tr>
<td>12</td>
<td>11</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p><strong>입출력 예 #1</strong></p>

<ul>
<li>10을 3으로 나눈 나머지가 1이고, 3보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 3을 return 해야 합니다.</li>
</ul>

<p><strong>입출력 예 #2</strong></p>

<ul>
<li>12를 11로 나눈 나머지가 1이고, 11보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 11을 return 해야 합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
