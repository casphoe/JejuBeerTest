//Object (객체 데이터)
// 여러 데이터를 key:value 형태로 저장합니다. { }
let user = {
    // key : value
    name : 'HEROPY',
    age : 85,
    isValid: true
};

let myName = "HEROPY";

let obj1 = {
   myName: "HEROPY",
   email: 'thesecon@gmail.com',
   hello: `Hello ${myName}?!`
}
console.log(obj1); // object
console.log(typeof(obj1));

console.log(user.name); // HEROPY 
console.log(user.age); // 85 
console.log(user.isValid); // true

// Null 
// 어떤 값이 의도적으로 비어있음을 의미합니다. 
let empty = null; 
console.log(empty); // null