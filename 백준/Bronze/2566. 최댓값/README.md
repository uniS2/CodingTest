# [Bronze III] 최댓값 - 2566

[문제 링크](https://www.acmicpc.net/problem/2566)

### 성능 요약

메모리: 9328 KB, 시간: 116 ms

### 분류

구현

### 제출 일자

2024년 2월 13일 15:50:29

---

### 코드리뷰

#### 나의 풀이

```js
let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

input = input.map((i) => i.split(" ").map(Number));
const max = Math.max(...input.flat());

input.forEach((_, i) => {
  for (let j = 0; j < input.length; j++) {
    if (input[i][j] == max) return console.log(`${max}\n${i + 1} ${j + 1}`);
  }
});
```

**✅ 풀이방법**

- `flat` 메서드를 이용해서 최댓값을 구한 후, `forEach` 반복문과 내부 `for` 문을 이용해 index 위치를 구한다.

**🤔시간이 오래 걸리는 이유?**

- 중첩 반복문으로 인해 index를 구하는 로직에서 시간이 오래걸림을 확인할 수 있다.

**😀 `indexOf`를 사용하면 어떨까?**

```js
let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

input = input.map((i) => i.split(" ").map(Number));
const max = Math.max(...input.flat());

input.forEach((v, i) => {
  if (v.includes(max))
    return console.log(`${max}\n${i + 1} ${v.indexOf(max) + 1}`);
});
```

- 중첩 반복문 대신 `indexOf` 메서드를 사용할 경우 소요 시간이 4ms나 줄어듦을 확인하였다.
- 다만 다른 사람 풀이와 비교시 여전히 120ms로 소요시간이 길었다 왜일끼?

**😀 반복문 `forEach`문과 `for`문!!**

```js
let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

input = input.map((i) => i.split(" ").map(Number));
const max = Math.max(...input.flat());

for (let i = 0; i < 9; i++) {
  if (input[i].includes(max))
    return console.log(`${max}\n${i + 1} ${input[i].indexOf(max) + 1}`);
}
```

- `flat` 메서드 때문에 소요 시간이 오래걸리나 확인해보았지만 `const max = Math.max(...input.map(i => Math.max(...i)));`로 사용시 놀랍게도 124ms가 됨을 확인할 수 있었다... :0
- 혹시나 싶어 `forEach` 반복문을 `for` 문으로 변경한 결과 소요시간이 **116ms** 밖에 걸리지 않음을 확인할 수 있었다 !!
- 메모리 또한 **9328 KB** 가장 적게 소요됨을 알 수 있다. (처음 9320 KB)

<br />

#### ✨ 결론

1. 중첩 반복문은 되도록 사용하지 않는다. 2차 배열의 index를 구할 경우 `indexOf` 메서드를 애용하자.
2. `forEach` 반복문은 `for` 문에 비해 시간이 오래걸린다. `for` 문 사용을 추천힌디/

---

### 문제 설명

<p><그림 1>과 같이 9×9 격자판에 쓰여진 81개의 자연수 또는 0이 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 행 몇 열에 위치한 수인지 구하는 프로그램을 작성하시오.</p>

<p>예를 들어, 다음과 같이 81개의 수가 주어지면</p>

<table class="table table-bordered td-center th-center table-center-40">
	<tbody>
		<tr>
			<th> </th>
			<th>1열</th>
			<th>2열</th>
			<th>3열</th>
			<th>4열</th>
			<th>5열</th>
			<th>6열</th>
			<th>7열</th>
			<th>8열</th>
			<th>9열</th>
		</tr>
		<tr>
			<th>1행</th>
			<td>3</td>
			<td>23</td>
			<td>85</td>
			<td>34</td>
			<td>17</td>
			<td>74</td>
			<td>25</td>
			<td>52</td>
			<td>65</td>
		</tr>
		<tr>
			<th>2행</th>
			<td>10</td>
			<td>7</td>
			<td>39</td>
			<td>42</td>
			<td>88</td>
			<td>52</td>
			<td>14</td>
			<td>72</td>
			<td>63</td>
		</tr>
		<tr>
			<th>3행</th>
			<td>87</td>
			<td>42</td>
			<td>18</td>
			<td>78</td>
			<td>53</td>
			<td>45</td>
			<td>18</td>
			<td>84</td>
			<td>53</td>
		</tr>
		<tr>
			<th>4행</th>
			<td>34</td>
			<td>28</td>
			<td>64</td>
			<td>85</td>
			<td>12</td>
			<td>16</td>
			<td>75</td>
			<td>36</td>
			<td>55</td>
		</tr>
		<tr>
			<th>5행</th>
			<td>21</td>
			<td>77</td>
			<td>45</td>
			<td>35</td>
			<td>28</td>
			<td>75</td>
			<td>90</td>
			<td>76</td>
			<td>1</td>
		</tr>
		<tr>
			<th>6행</th>
			<td>25</td>
			<td>87</td>
			<td>65</td>
			<td>15</td>
			<td>28</td>
			<td>11</td>
			<td>37</td>
			<td>28</td>
			<td>74</td>
		</tr>
		<tr>
			<th>7행</th>
			<td>65</td>
			<td>27</td>
			<td>75</td>
			<td>41</td>
			<td>7</td>
			<td>89</td>
			<td>78</td>
			<td>64</td>
			<td>39</td>
		</tr>
		<tr>
			<th>8행</th>
			<td>47</td>
			<td>47</td>
			<td>70</td>
			<td>45</td>
			<td>23</td>
			<td>65</td>
			<td>3</td>
			<td>41</td>
			<td>44</td>
		</tr>
		<tr>
			<th>9행</th>
			<td>87</td>
			<td>13</td>
			<td>82</td>
			<td>38</td>
			<td>31</td>
			<td>12</td>
			<td>29</td>
			<td>29</td>
			<td>80</td>
		</tr>
	</tbody>
</table>

<p>이들 중 최댓값은 90이고, 이 값은 5행 7열에 위치한다.</p>

### 입력

 <p>첫째 줄부터 아홉 번째 줄까지 한 줄에 아홉 개씩 수가 주어진다. 주어지는 수는 100보다 작은 자연수 또는 0이다.</p>

### 출력

 <p>첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 위치한 행 번호와 열 번호를 빈칸을 사이에 두고 차례로 출력한다. 최댓값이 두 개 이상인 경우 그 중 한 곳의 위치를 출력한다.</p>
