# 문제풀이

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
