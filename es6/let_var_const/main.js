var iNum = 5;
if (true) {
    var iNum = 10;
}
console.log(iNum);
// => iNum = 10


let iNum2 = 5;
if (true) {
    let iNum2 = 10;
}
console.log(iNum2);
// => iNum2 = 5 (Khác block code)


// const: Hằng số có giá trị không thay đổi
// const PI = 3.14;
// PI = 5;
// console.log(PI);
// => Error


const object = {HoTen: "Nguyen Van A", Tuoi: 18};

// object = {HoTen: "Nguyen Van B", Tuoi: 22};
// console.log(object);
// => Error

object.HoTen = "Le Van Teo";
console.log(object);
//? => Hằng số không thể gán bằng 1 obj khác (Nếu hằng số là 1 obj)
//? Nhưng có thể set lại được giá trị là những thuộc tính khác