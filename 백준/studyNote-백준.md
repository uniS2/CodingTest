# 필수 개념

- [필수 개념](#필수-개념)
  - [문자와 숫자](#문자와-숫자)
    - [어떻게 **문자열을 아스키 코드** 로 변환할 수 있을까?](#어떻게-문자열을-아스키-코드-로-변환할-수-있을까)

## 문자와 숫자

### 어떻게 **문자열을 아스키 코드** 로 변환할 수 있을까?

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
