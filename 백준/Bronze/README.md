# Bronze 오답노트

- [Bronze 오답노트](#bronze-오답노트)
  - [II](#ii)
  - [필수 개념](#필수-개념)
    - [어떻게 **문자열을 아스키 코드** 로 변환할 수 있을까?](#어떻게-문자열을-아스키-코드-로-변환할-수-있을까)

## II

| 문제                                            | 내용                                                            | 분류            |
| :---------------------------------------------- | :-------------------------------------------------------------- | :-------------- |
| ✅ 1152. 단어의 개수                            | `"".split()`에 주의! 항상 **반례** 생각하기.                    | #구현 #문자열   |
| ✅ 3052. 나머지                                 | 수의 집합에서 서로 다른 수 구할 경우 `for` 반복문 활용 추천     | #사칙연산 #수학 |
| ✅ 25314. 코딩은 체육과목 입니다                | 내장 객체 `Math`의 메서드: 소수점 올림, 버림, 반올림            | #구현           |
| ✅ 11654. 아스키 코드 <br /> 10809. 알파벳 찾기 | `charCodeAt`, `fromCharCode` 메서드를 통해 아스키 코드 활용하기 | #구현 #문자열   |

## 필수 개념

#### 어떻게 **문자열을 아스키 코드** 로 변환할 수 있을까?

🤔 **charCodeAt**

- 메서드 `charCodeAt()`는 문자형 값을 주어진 인덱스의 UTF-16 코드 유닛으로 나타내어 0부터 65535 사이의 정수로 반환하는 메서드입니다.

  ```js
  const sentence = "The quick brown fox jumps over the lazy

  const index = 4;

  console.log(sentence.charCodeAt(index));  // 113
  console.log("a".charCodeAt());  //97

  ```

🤔 **fromCharCode**

- 메서드 `fromCharCode()`는 UTF-16 코드 유닛의 시퀀스로부터 문자열을 생성해 반환하는 메서드입니다.

  ```js
  console.log(String.fromCharCode(86, 100, 102, 76)); //"VdfL"
  ```

📌 **참고자료:** [String.prototype.charCodeAt() | MDN](<(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)>), [String.fromCharCode() | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode) <br/> [아스키 코드 활용(charCodeAt, fromCharCode)](https://velog.io/@rkio/Javascript-%EC%95%84%EC%8A%A4%ED%82%A4-%EC%BD%94%EB%93%9C-%ED%99%9C%EC%9A%A9)
