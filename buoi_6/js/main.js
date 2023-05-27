// while (true) {
//     console.log('Hello Cybersoft');
//     Xử lý dừng
// }
/**
 * 
 *      Các yếu tố xác định bài toán lặp : logic lặp đi lặp lại 1 cách tự động thì đó là bài toán lặp
 *      B1: Xác định yếu tố thay đổi (khởi tạo biến bước nhảy)
 *      B2: Thiết lập điều kiện lặp
 *      B3: Cài đặt khối xử lý
 *      B4: Thay đổi giá trị của biến bước nhảy
 * 
 */


document.getElementById('btnInTheDiv').onclick = function() {

    // Input: number
    var input = Number(document.getElementById('iSo').value);
    // Output: string
    var output = '';
    // Xử lý
    var dem = 1;

    while (dem <= input) { // Còn đúng thì còn làm

        var div = '<div class="alert alert-success mt-2">Hello Cybersoft</div>';
        output += div;
        dem++;
        
    }

    document.getElementById('ketQua1').innerHTML = output;
}


/**Ví dụ 2: Tính giai thừa */
document.getElementById('btnTinhGiaiThua').onclick = function() {
    
    // Input: number
    var nhapSo = Number(document.getElementById('nhapSo').value);

    // Output: giaiThua = 1
    var giaiThua = 1;
    // Xác định yếu tố thay đổi khởi tạo nó
    var giaTri = 1;
    // Thiết lập điều kiện lặp
    while (giaTri <= nhapSo) { // Điều kiện lặp
        giaiThua*=giaTri;
        // Thay đổi điều kiện lặp
        giaTri++;
    }
    document.getElementById('ketQua').innerHTML = giaiThua;

}


/**Ví dụ 3: Nhập vào 1 số. Tính tổng từ 1 -> n (Số đã nhập) */
document.getElementById('btnTinhTong').onclick = function () {
    // Input
    var nhapSoVD3 = Number(document.getElementById('nhapSoVD3').value);

    // Process
    var tong = 0;
    var buocNhay = 1;
    while (buocNhay <= nhapSoVD3) {
        tong+=buocNhay;
        buocNhay++;
    }

    // Output
    document.getElementById('inKetQua').innerHTML = tong;
}


/**Ví dụ4: Cho phép người dùng nhập vào 1 số. Tính tổng các số chẵn
 * 
 */
document.getElementById('btnTinhTongChan').onclick = function () {
    // Input: number
    var number = Number(document.getElementById('nhapSoVD4').value);

    // Output: number
    var tong = 0;
    // Process
    // var soHang = 1;
    var soHang = 2;
    while (soHang <= number) {
        // if (soHang % 2 === 0) {
        //     tong+=soHang;
        // }
        tong+=soHang;
        soHang+=2;
    }

    document.getElementById('inKetQua4').innerHTML = tong;
}


/**Ví dụ 5: Cho phép người dùng nhập vào 1 số. Cho biết đó có phải là số nguyên tố hay không */
document.getElementById('btnSoNguyenTo').onclick = function () {
    // Input: number
    var number = Number(document.getElementById('nhapSoVD5').value);
    // Output: string
    var ketQua = '';
    // Process
    var soHang = 1;
    var dem = 0;
    while (soHang <= number) {
        if (number % soHang === 0) {
            dem++;
        }
        soHang++;
    }
    if (dem == 2) {
        ketQua = number + ' là số nguyên tố !';
    } else {
        ketQua = number + ' không phải là số nguyên tố !';
    }

    document.getElementById('inKetQua5').innerHTML = ketQua;

}

/**Ví dụ 6: Cho phép người dùng nhập vào 1 số. In ra số ngôi sao tương ứng */
document.getElementById('btnInSao').onclick = function() {
    // Input: number
    var number = Number(document.getElementById('nhapSoVD6').value);
    // Output: string
    var ketQua = '';
    // Process
    // var soSao = 1;
    // while (soSao <= number) {
    //     ketQua+=' * ';
    //     soSao++;
    // }

    for (var soSao = 0; soSao < number; soSao++) {
        ketQua+=' * ';
    }
    document.getElementById('inKetQua6').innerHTML = ketQua;

}


/**Ví dụ 7: Cho phép người dùng nhập vào số hàng và số cột. In ra số ngôi sao */
document.getElementById('btnInSao7').onclick = function() {
    // Input: nhapHang(number), nhapCot(number)
    var nhapHang = Number(document.getElementById('nhapHang').value);
    var nhapCot = Number(document.getElementById('nhapCot').value);

    // Output: string
    var ketQua = '';

    // Process
    for (var i = 0; i < nhapHang; i++) {
        for (var soSao = 0; soSao < nhapCot; soSao++) {
            ketQua += ' * ';
        }
        ketQua+='</br>';
    }
    

    document.getElementById('inKetQua7').innerHTML = ketQua;
}


/**Ví dụ 8: Cho phép người dùng nhập vào 1 số. In ra các số nguyên tố nhỏ hơn hoặc bằng số người dùng nhập */
document.getElementById('btnTinh8').onclick = function() {
    // Input: number
    var number = Number(document.getElementById('nhapSoVD8').value);

    // Output: string
    var ketQua = '';

    // Process
    for (var iSo = 2; iSo <= number; iSo++) {
        // Chạy qua từ 2 -> n kiểm tra từng số có phải là số nguyên tố hay không dựa vào hàm đã xây dựng
        var checkSNT = ktSNT(iSo);
        if (checkSNT) {
            ketQua += iSo + ' ';
        }
    }
    document.getElementById('inKetQua8').innerHTML = ketQua;
}

// Kiểm tra số nguyên tố
function ktSNT(number) { // Input: number
    // Output true ? false
    var checkSNT = true;

    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            checkSNT = false;
            break;
        }
    }

    return checkSNT;
}