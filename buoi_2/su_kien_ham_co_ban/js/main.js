//Định nghĩa hàm: Dùng để thực thi 1 loạt hành động

function sayHello() {
    alert('Chào mọi người !');
}

/**
 * Ví dụ 2: Viết chương trình yêu cầu người dùng nhập vào 1 giá trị 
   và khi người dùng bấm hiển thị thì giá trị đó sẽ in ra tại thẻ span#ketQuaHienThi
 */

//handleEvent: Xử lí sự kiện
function hienThiThongTin() {
    // Lấy giá trị nhập khi gọi hàm hiển thị thông tin
    // Input: luôn là string
    var input = document.getElementById('giaTriNhap');
    // console.log(input.value);

    //Output: String
    //Progress
    var output = input.value;
    //Xử lí kết quả hiển thị lên giao diện
    var tagSpanKetQua = document.getElementById('ketQuaHienThi');
    tagSpanKetQua.innerHTML = output;
}

/**
* Ví dụ 3: Nhập vào số tiền lương (1h) và số giờ làm. 
           In ra tổng lương bằng số giờ nhận tiền lương
**/

function tinhTongLuong() {
    //Input: tienLuong1h: number, soGioLam: number
    var tagTienLuong = document.getElementById('tienLuong1h').value;
    var tagSoGio = document.getElementById('soGioLam').value;

    //Kiểm tra input
    // console.log(tagTienLuong);
    // console.log(tagSoGio);

    //Output: tongLuong: number
    var tongLuong = 0;

    //Progress
    tongLuong = tagTienLuong * tagSoGio;

    document.getElementById('tongLuong').innerHTML = tongLuong.toLocaleString();
}

/*
    Ví dụ 4: Xây dựng form thông báo đăng nhập
*/

// function xuLyDangNhap() {

// }

var btnDangNhap = document.getElementById('btnDangNhap');
btnDangNhap.onclick = function () {
    //Input: taiKhoan: string, matKhau: string
    var taiKhoan = document.getElementById('taiKhoan').value;
    var matKhau = document.getElementById('matKhau').value;

    // console.log(taiKhoan, matKhau);

    //Output: thongBao: string
    var thongBao = '';

    //Progress:
    thongBao = taiKhoan + '-' + matKhau;
    var tagKetQua = document.getElementById('ketQuaDangNhap');

    tagKetQua.innerHTML = thongBao;
    //Thay đổi màu sắc
    tagKetQua.style.backgroundColor = 'red';
    tagKetQua.style.display = 'block';
    tagKetQua.style.padding = '15px';
    tagKetQua.style.margin = '15px';
};

// btnDangNhap.onclick = function() { //Anonymous function
//     alert('123');
// }


/*
    Ví dụ 5: Tính tiền típ
*/

document.getElementById('btnTinhTienTip').onclick = function () {
    /*
        Input:
            tongTienThanhToan: number
            phanTramTip: number
            soNguoiTip: number
        
        Progress
            Lấy thông tin người dùng nhập từ giao diện
            Sử dụng công thức tính phần trăm típ quy ra tiền và chia cho số người 

        Output: tienTipTrenNguoi:number
    */

    var tongTienThanhToan = document.getElementById('tongTienThanhToan').value;
    var phanTramTip = document.getElementById('phanTramTip').value;
    var soNguoiTip = document.getElementById('soNguoiTip').value;
    var tienTipTrenNguoi = 0;

    tienTipTrenNguoi = tongTienThanhToan * phanTramTip / 100 / soNguoiTip;

    document.getElementById('tienTipTrenNguoi').innerHTML = tienTipTrenNguoi + ' $';

}