# [level 0] 배열의 길이를 2의 거듭제곱으로 만들기 - 181857

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181857#)

### 성능 요약

메모리: 33.6 MB, 시간: 0.04 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2024년 2월 13일 14:29:40

---

### 오답노트

#### 공부: 반복문을 사용한 풀이 방법 - 1

```js
function solution(arr) {
  let result = [...arr];
  let num = 0;

  while (2 ** num < arr.length) num++;
  for (let i = 0; i < 2 ** num - arr.length; i++) {
    result.push(0);
  }
  return result;
}
```

**🤔 틀린 이유**

- `Math.sqrt()` 메서드를 이용하여 arr.length와 비교 후 풀려하였으나 **제곱근은 log가 아니기 때문에 배열의 길이가 2의 정수 거듭제곱이 되는 때를 찾을 수 없다.** [수학 개념 오류]

**✅ 풀이 방법**

- 따라서, 다른 사람 풀이 중 **제곱** 을 이용한 풀이를 다음과 같이 참고하였다.

1. 변수 `num`을 이용하여 2를 num 제곱한 수와 arr의 길이를 비교하여 num을 증가시킨다. (증감연산자 ++ 사용)
2. 구한 num을 이용하여 `2 ** num - arr.length`의 값 만큼 `result`에 0을 push해준다.
   이때, result 변수를 새로 이용하는 이유는 arr에 직접 push 할 경우 arr.length의 길이가 항상 변동되어 원하는 로직을 제대로 구현할 수 없기 때문이다.

<br/>

#### 공부: 반복문을 사용하지 않는 응용 방법 - 2

```js
function solution(arr) {
  const log = Math.log2(arr.length);
  if (log == Math.trunc(log)) return arr;
  else
    return [...arr, ...Array(2 ** (Math.trunc(log) + 1) - arr.length).fill(0)];
}
```

**✅ 풀이 방법**

1. `Math.sqrt()` 이용하여 대신 `Math.log2` 메서드를 이용하여 2의 로그값을 구한다.
2. 빠른 로직 구현을 위해 **배열의 길이가 이미 2의 정수 거듭제곱** 인 경우 원래 배열을 반환해준다.
3. 배열의 길이가 2의 정수 거듭제곱이 아닌 경우 2에 `2 ** (Math.trunc(log) + 1) - arr.length` 계산을 통해 0으로 채워야하는 길이를 구한 후, `Array` 생성자와 `fill()` 메서드와 배열 구조 분해 할당을 이용하여 새로운 배열을 반환해준다. (이때, `Math.trunc(log) + 1` 대신` Math.ceil()` 메서드를 이용할 수 있다.)

**😀 결과**

- 풀이시 2번째 방법이 반복문을 사용하지 않아 0.02ms 더 빠름을 확인할 수 있었다(0.01MB 메모리 추가 소모).

<br/>

#### 결론

- `Math.pow()`와 `Math.log2`에 대해 알 수 있다.
- 수학 개념에 유의하여 문제 풀자! <br />로직 통과가 되지 못했을 경우 `console.log`를 통해 세부적인 값 확인하기
- 해결방법은 생각보다 쉽다. 너무 어렵게 접근하지 말자!

---

### 문제 설명

<p>정수 배열 <code>arr</code>이 매개변수로 주어집니다. <code>arr</code>의 길이가 2의 정수 거듭제곱이 되도록 <code>arr</code> 뒤에 정수 0을 추가하려고 합니다. <code>arr</code>에 최소한의 개수로 0을 추가한 배열을 return 하는 solution 함수를 작성해 주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>arr</code>의 길이 ≤ 1,000</li>
<li>1 ≤ <code>arr</code>의 원소 ≤ 1,000</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>arr</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[1, 2, 3, 4, 5, 6]</td>
<td>[1, 2, 3, 4, 5, 6, 0, 0]</td>
</tr>
<tr>
<td>[58, 172, 746, 89]</td>
<td>[58, 172, 746, 89]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>예제 1번의 <code>arr</code>의 길이는 6입니다. <code>arr</code>의 길이를 2의 정수 거듭제곱으로 만드는 방법은 0을 2개, 10개, 26개,..., 추가하는 방법이 있고 그중 최소한으로 0을 추가하는 방법은 2개를 추가하는 것입니다. 따라서 [1, 2, 3, 4, 5, 6, 0, 0]을 return 합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>예제 2번의 <code>arr</code>의 길이는 4이고 이미 2의 정수 거듭제곱입니다. 따라서 뒤에 0을 추가하지 않아도 되므로 [58, 172, 746, 89]를 return 합니다.</li>
</ul>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
