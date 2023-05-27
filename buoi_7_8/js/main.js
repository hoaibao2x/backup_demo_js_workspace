/** Giới thiệu mảng, truy xuất và thay đổi giá trị */
// Vấn đề đặt ra: Lưu trữ 5 thông tin là tên học viên(Nam, Hằng, Minh, Long, Khải)

// Khai báo mảng
var arrName = ['Nam', 'Hằng', 'Minh', 'Long', 'Khải'];

// Lấy ra 1 giá trị trong mảng
console.log(arrName[3]);

document.getElementById('inHoTen').innerHTML = arrName[4];

arrName[1] = 'Sang';
console.log(arrName);

// Lấy ra chiều dài (số lượng phần tử của mảng)
console.log('Chiều dài của mảng: ', arrName.length);

// Duyệt mảng: In ra màn hình console của browser
var content = '';
for (var i = 0; i < arrName.length; i++) {
    // console.log(arrName[i]);
    content += '<p class= "badge badge-success">' + arrName[i] + '</p>';
}
document.getElementById('array-content').innerHTML = content;



// -------- Hàm thêm dữ liệu vào mảng --------
// Hàm thêm 1 giá trị vào cuối mảng
// arrName.push('Uyên', 'Linh');
// console.log(arrName);

// unshift(): Thêm 1 hoặc nhiều giá trị vào đầu mảng (Làm thay đổi chỉ số index nên ít sử dụng)
// arrName.unshift('Bảo', 'Minh Anh');
// console.log(arrName);


// -------- Hàm xóa giá trị ra khỏi mảng --------
// splice(): Xóa 1 hoặc nhiều giá trị trong mảng. => Thay đổi index cũng như length của mảng
arrName.splice(2, 1);
console.log(arrName);

// shift(): Lấy ra 1 phần tử ở đầu mảng và xóa ra khỏi mảng
// pop(): Lấy ra 1 phần tử ở cuối mảng và xóa đi phần đó

// Lấy ra và xóa ở đầu
var hoTen1 = arrName.shift();
console.log('Họ tên: ', hoTen1);
console.log(arrName);

// Lấy ra và xóa ở cuối
var hoTen2 = arrName.pop();
console.log('Họ tên: ', hoTen2);
console.log(arrName);



// -------- Dom qua tagname --------
var arrTagSection = document.getElementsByTagName('section');
arrTagSection[1].innerHTML = 'Hello';
arrTagSection[1].style.color = 'yellow';
console.log(arrTagSection);

for (var i = 0; i < arrTagSection.length; i++) {
    arrTagSection[i].className = 'badge badge-success m-2';
}



// -------- Dom qua className --------
var arrTagClass = document.getElementsByClassName('txt');

console.log('arrTagClass', arrTagClass);

for (var i = 0; i < arrTagClass.length; i++) {
    // Mỗi lần duyệt lấy ra 1 tag
    var tag = arrTagClass[i];
    // Thêm class (Giữ lại class cũ)
    tag.className = 'txt alert alert-danger';
    tag.innerHTML = 'Hello Cybersoft';    
}




// -------- Dom qua name --------
var arrTagName = document.getElementsByName('txt-demo');

console.log(arrTagName);

arrTagName[0].style.color = 'pink';



/** .querySelector(selector): Khi dom đến dựa vào querySelector thì kết quả trả về là 1 thẻ đàu tiên khớp với selector đó (Dù có nhiều thẻ có selector giống nhau). Nếu không có thẻ nào khớp selector đó thì kết quả trả về là undefine */

document.querySelector('#btnSubmit').onclick = function() {
    var pText1 = document.querySelector('#p-text').innerHTML;

    alert(pText1);
}

/** querySelectorAll(): Khi dom đến dựa vào querySelectorAll thì kết quả trả về là 1 mảng. Lưu ý: Nếu như chỉ có 1 thẻ khớp với selector thì nó vấn trả về 1 mảng và mảng đó chỉ có 1 phần tử. Nếu không khớp phần tử nào thì kết quả là [] */

document.querySelector('#btnDangNhap').onclick = function(event) {
    event.preventDefault(); // Hàm chặn sự kiện reload mặc định của browser khi submit

    var arrTagInput = document.querySelectorAll('#form input');

    console.log('taiKhoan', arrTagInput[0].value);
    console.log('matKhau', arrTagInput[1].value);
}