//? hoisting: Khi thực hiện những khai báo biến là var sẽ được đưa lên trên cùng

// a = 10;
// console.log(a); 
// => a = 10
//? Được sử dụng trước khi khai báo
// var a = 20;

a = 10;
console.log(a);
let a = 20;
// => Cannot access 'a' before initialization
//? Khai báo rồi mới được sử dụng (let, constant)