// const year = parseInt(prompt("Nhập năm:"));
// const month = parseInt(prompt("Nhập tháng (1-12):"));
//
//
// if (month >= 1 && month <= 12 && year > 0) {
//     let dateInMonth;
//     // Check xem co phai thang 2 ko
//     if (month === 2) {
//         // neu la nam nhuan thi in ra 29
//         if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//             daysInMonth = 29;
//         } else {
//             daysInMonth = 28;
//         }
//     } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//         daysInMonth = 30;  // Tháng 4, 6, 9, 11 có 30 ngày
//     } else {
//         daysInMonth = 31;
//     }
//     alert(`Số ngày trong tháng ${month} của năm ${year} là: ${daysInMonth}`);
// } else {
//     alert("Dữ liệu nhập vào không hợp lệ.");
// }

const inputNumberStart = parseInt(prompt("Nhập số đầu tiên"));
if (inputNumberStart < 2) {
    alert("Khong phai so nguyen to")
} else if (inputNumberStart === 2 || inputNumberStart === 3) {
    alert("La so nguyen to")

} else if (inputNumberStart % 2 === 0 || inputNumberStart % 3 === 0) {
    alert("Khong phai so nguyen to")

} else {
    for (let i = 5; i <= inputNumberStart; i++) {
        if (inputNumberStart % i === 0) {
            alert("Khong phai so nguyen to")
            break
        } else {
            alert("La so nguyen to")
            break
        }
    }
}
// var a = "hello";
// var x = 2;
// console.log(x + a);
//Có 3 từ khoá để khai bao một biến trong JS: var, let, const

//var: Dung de khai bao bien, co tac dung luu tru du lieu