# 문제풀이

## 목차

- [배열](#배열)
- [연산자](#연산자)

## 배열

- 배열 형태로 들어온 input 값 -> 구조 분해 할당 사용하기
  (선언에서 분리된 할당 / 181947. 덧셈식 출력하기)
- 이차원 정수 배열을 사용한 slice 메서드 사용의 경우 map 메서드 고려하기 (**return 반환 필수**)
  ```js
  return parts
    .map(([s, e], i) => {
      return my_strings[i].slice(s, e + 1);
    })
    .join("");
  ```

## 연산자

- [논리 연산자 | Info](https://ko.javascript.info/logical-operators) : OR 연산자 `T||`, AND 연산자 `F&&` 활용하여 문제 풀기
