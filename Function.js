// sebelum menggunakan function

const res = require("express/lib/response")

// konversi suhu celcius ke fahrenheit
const celcius = 90
const fahrenheit = 9/5 * (celcius) + 32
console.log("Fahrenheit = " + fahrenheit)

// setelah menggunakan function

// konversi suhu celcius ke fahrenheit

function convertToFahrenheit(celcius){
    
    // local variable => variable yang didefinisikan didalam scope function dan hanya dapat diakses
    // didalam body function
    const fahrenheit = 9/5 * (celcius) + 32

    console.log(fahrenheit)
}

// call function
convertToFahrenheit(11)

// outter vairable => variable yang didefinisikan di luar scope function dan dapat diakses secara global
// jika ada variable dengan nama yang sama didalam function maka outter variable akan ditimpa
let name = 'david'

function getName(){

    console.log("Nama : " + name)
}

getName()

let str = "hello world"

function printTxt(str){

    // kondisi untuk menentukan apakah parameter itu bernilai undefined
    if (str === undefined){
        return
    }

    console.log(str)
} 

// call function not arguments
printTxt() // undifined

// default parameter => nilai default yang didefinisikan untuk parameter jika function tidak 
// menyertakan argumen maka parameter akan menggunakan nilai default parameter
function sumNums(a = 5, b = 1){
    let sum = a + b 
    console.log("Sum is " + sum)
}

// with argument
sumNums(11, 4) // sum = 15 

// wtihout argument
sumNums() // sum = 6

// mendefinisikan fungsi return 
function timesNum(a = 5, b = 2){
    return a * b 
}

console.log("Result " + timesNum(11, 2))
console.log("Result " + timesNum())// NaN or default value

// mendeklarasikan function expression 

const convertToFahrenheit2 = function (celcius = 5){
    return 9/5 * (celcius) + 32
}

console.log("Result " + convertToFahrenheit2(11))
console.log("Result " + convertToFahrenheit2())

function say(){
    return "hello"
}

let prints = say
console.log(prints)


// function sebagai parameter 

function sumNums2(a, b){
    return a + b 
}

const getNums = function(a, b, sum){
    return sum(a, b) // a + b
}

let result = getNums(11, 2, sumNums2)

console.log(result)

// mengembalikan function sebagai function lain

function operations(a, b){
    return function(){
        return a + b
    }
}

let temps = operations(11, 11)

console.log(`a + b = ${temps()}`)

// ============================================================
// KONSEP IMMUTABILITY vs MUTABILITY DALAM FUNCTION
// ============================================================
// MUTABILITY   => nilai dapat diubah setelah dibuat.
//                Berlaku untuk data referensi (objek, array).
//                Saat dikirim ke function, yang diteruskan adalah
//                REFERENSI (pass by reference), sehingga perubahan
//                di dalam function ikut mengubah data aslinya.
//
// IMMUTABILITY => nilai tidak dapat diubah setelah dibuat.
//                Berlaku untuk data primitive (string, number,
//                boolean, null, undefined).
//                Saat dikirim ke function, nilai disalin (pass by
//                value), sehingga perubahan di dalam function TIDAK
//                mengubah variabel aslinya.
// ============================================================

// Contoh 1: PRIMITIVE (immutable) => tidak mengubah nilai asli
let suhu = 20

function ubahSuhu(s) {
    s = s + 10 // hanya mengubah salinan lokal
}

ubahSuhu(suhu)
console.log("Primitive setelah function: " + suhu) // 20 (tidak berubah)

// Contoh 2: OBJEK (mutable) => mengubah nilai asli
let user = { nama: "David", umur: 20 }

function tambahUmur(u) {
    u.umur += 1 // mengubah lewat referensi yang sama
}

tambahUmur(user)
console.log("Objek setelah function: " + user.umur) // 21 (berubah)

// Contoh 3: ARRAY (mutable) => mengubah nilai asli
let daftar = [1, 2, 3]

function tambahAngka(arr) {
    arr.push(4) // mengubah array asli
}

tambahAngka(daftar)
console.log("Array setelah function: " + daftar) // [1, 2, 3, 4]

// Contoh 4: Solusi immutability pada data referensi
// => buat salinan baru, jangan ubah data asli
let daftar2 = [1, 2, 3]

function tambahAngkaImmutable(arr) {
    return [...arr, 4] // spread => array baru, asli tetap utuh
}

const hasilBaru = tambahAngkaImmutable(daftar2)
console.log("Array asli tetap: " + daftar2) // [1, 2, 3]
console.log("Array baru: " + hasilBaru) // [1, 2, 3, 4]