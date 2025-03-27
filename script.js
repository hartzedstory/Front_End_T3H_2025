// Thực hành

// Bai 1
var array = new Array(13,2412,4123,4931,123,22,4,1);
// var tichCuaCaMang = 0;
// for (var i = 0; i < array.length; i++) {
//     tichCuacaMang *= array[i];
// }
// console.log(tichCuacaMang);

// Tim so nho nhat chia het cho 2
var soNhoNhatChiaHet2 = 0;
for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        if (soNhoNhatChiaHet2 > array[i] && array[i] > 0) {
            soNhoNhatChiaHet2 = array[i];
        }
    }
}
console.log(soNhoNhatChiaHet2);

// Tim so nho nhat chua het cho 3
var soNhoNhatChiaHet3 = 0;
for (var i = 0; i < array.length; i++) {
    if (array[i] % 3 == 0) {
        if (soNhoNhatChiaHet3 > array[i]) {
            soNhoNhatChiaHet3 = array[i];
        }
    }
}
console.log(soNhoNhatChiaHet3);

// Gia tri trung binh cua mang
var giaTriTrungBinh = 0;
var tongCuaMang = 0;
for (var i = 0; i < array.length; i++) {
    tongCuaMang += array[i];
}
console.log(tongCuaMang / array.length);

//Loc cac so nguyen to
const primes = [];

for (let i = 0; i < arr.length; i++) {
    let isPrime = true;

    // Kiểm tra xem arr[i] có phải là số nguyên tố không
    if (arr[i] <= 1) {
        isPrime = false; // Số nhỏ hơn hoặc bằng 1 không phải là số nguyên tố
    } else {
        for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
            if (arr[i] % j === 0) {
                isPrime = false; // Nếu chia hết cho j thì không phải số nguyên tố
                break;
            }
        }
    }

    // Nếu là số nguyên tố thì thêm vào mảng primes
    if (isPrime) {
        primes.push(arr[i]);
    }
}
console.log(primes);


//Sắp xếp mảng tìm kiếm nổi bọt
for (let i = 0; i < array.length - 1; i++) {
    // Lặp qua mảng từ đầu đến cuối (n-i-1 để tránh so sánh với các phần tử đã được sắp xếp)
    for (let j = 0; j < array.length - 1 - i; j++) {
        // Nếu phần tử hiện tại lớn hơn phần tử tiếp theo, hoán đổi chúng
        if (array[j] > arr[j + 1]) {
            // Hoán đổi phần tử arr[j] và arr[j + 1]
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}


//Bai 2: Nhap vao 1 chuoi


//Bai 3:
// 1. Tìm chuỗi đầu tiên có độ dài nhỏ nhất trong mảng
let minLengthStr = s[0];
for (let i = 1; i < s.length; i++) {
    if (s[i].length < minLengthStr.length) {
        minLengthStr = s[i];
    }
}

const containsText = s.filter(str => str.includes(text));
const newS = s.map(str => str.slice(0, 3));
const combinedString = s.join('-');

//Bài 4:

//Bài 5:
var arrCustom = new Array(123,433,126,11,655,1236,9235423);
var arrTemp = new Array();
var tongCacSoLe = 0;

for (let i = 0; i < arrCustom.lenght; i++) {
    if (arrCustom[i] % 2 != 0) {
        arrTemp.push(arrCustom[i]);
    }
}
for (let i = 0; i < arrTemp.length; i++) {
    tongCacSoLe += arrTemp[i];
}
console.log(tongCacSoLe);