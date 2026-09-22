/*
 아래는 자바 스크립 변수 선언 및 출력 예시
*/
let value = 6 * 6; //let 변수 선언
console.log(value); /* value 변수에 선언된 값을
화면에 출력 */

value = 7 * 9; //value 변수 안데 7 * 9 값을 대입
console.log(value); //다시 value 변수 값을 출력

value = 9 % 7;
console.log(value);

/* 위에 똑같은 value 이름을 먼저 선언 했는데 다시 
let value로 다시 선언 하면 오류가 발생 let을 빼거나
다른 이름으로 선언 해야함 */
let value2 = 6;
console.log(value2);

//상수 선언 예제
const a =1;
/* 상수는 변경(변수에 다른 값을 다시 할당할 수 없음)
한번 선언 하면 변경을 못함 내부 속성이나 요소는 변경 가능 */
//a= 2;

const PI = 3.14;

var b = 1;
var b = 2;
console.log(b);

let myName = "HEROPY";
let email = 'thesecon@gmail.com';
let hello = `Hello ${myName}?!` 

//콘솔 탭에서 출력
console.log(myName);
console.log(email);
console.log(hello);
/* document.write 기본적으로 자동으로 줄 바꿈이 안됨 */
/* 밑에 처럼 + 기호 하고 '<br>를 입력하면 줄 바꿈 처리가 됨 */
// viewport(body)로 출력
document.write(myName + '<br>');
document.write(email + '<br>');
document.write(hello + '<br>');

// Number(숫자 데이터) 
// 정수 및 부동소수점 숫자를 나타냅니다. 
let number = 123; 
let opacity = 1.57; 
console.log(number); // 123 
console.log(opacity); // 1.57 


document.write(number + '<br>');
document.write(opacity + '<br>');

// Boolean(불린 데이터) 
// true, false 두 가지 값밖에 없는 논리 데이터입니다. 
let checked = true;  //true -> 1
let isShow = false;  //false -> 0
console.log(checked); // true 
console.log(isShow); // false

//type of(변수 이름) -> 결과 값은 데이터 타입 출력
console.log(typeof(myName)); // string
console.log(typeof(number)); // number
console.log(typeof(isShow)); // boolean

// Undefined 
// 값이 할당되지 않은 상태를 나타냅니다. 
let undef; 
let obj = { abc: 123 }; 
console.log(undef); // undefined 
console.log(obj.abc); // 123 
console.log(obj.xyz); // undefined