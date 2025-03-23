// Mảng
//Cách 1:
const arr1 = [1, 2, 3, 4, 5, 6];

//Cách 2:
const arr2 = new Array(1,3,4,5);

arr1[2] = 9;
console.log(arr1);

for (let i = 0; i < arr1.length ; i++) {
    console.log(arr1[i]);
}

var arr = [12,2342,532,4665,11]
//Ex1: Them 1 phan tu vao dau mang: them so 99
/*
Mang ban dau: [ |  |  |  |   ]

Mang sau: [ 99 |  |  |  |  |  |]
 */
var tempArr = [];
tempArr[0] = 99
for (let i = 0; i < arr.length; i++) {
    tempArr[i+1] = arr[i];
}
arr = tempArr;
tempArr = null;
console.log("mang sau khi them o dau");
console.log(arr)

//Ex2: Them 1 phan tu vao cuoi mang: them so 100
var tempArr2 = new Array(arr.length);
tempArr2[arr.length] = 100;
for (let i = 0; i < arr.length; i++) {
    tempArr2[i] = arr[i];
}
arr = tempArr2;
tempArr2 = null;
console.log("mang sau khi them o cuoi");
console.log(arr)


//Ex3: Xoa 1 phan tu cuoi mang

var tempArr3 = new Array(arr.length - 1);
for (let i = 0; i < arr.length - 1; i++) {
    tempArr3[i] = arr[i];
}
arr = tempArr3;
tempArr3 = null;
console.log("mang sau khi xoa o cuoi");
console.log(arr)

//Ex4: Xoa 1 phan tu dau mang
var tempArr4 = new Array(arr.length - 1);
for (let i = 0; i < arr.length - 1; i++) {
    tempArr4[i] = arr[i + 1];
}
arr = tempArr4;
tempArr4 = null;
console.log("mang sau khi xoa o cuoi");
console.log(arr) 