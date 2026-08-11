// mengubah nilai ke dalam bentuk string menggunakan beberapa method berikut

const res = require("express/lib/response")

let nums = 12

console.log(String(nums))
console.log(nums.toString())

console.log(typeof String(nums) == 'string')

// mengubah suatu nilai ke dalam bentuk number

nums = '13.5'
console.log(Number(nums))

nums = true 
console.log(Number(nums))

nums = false 
console.log(Number(nums))

nums = '115.5'
console.log(Math.round(Number(nums)))

// parseInt(num) => mengonversi suatu string menjadi integer proses konversi ini akan memeriksa
// karakter satu persatu yang bisa dikonversikan ke angka
nums = '10px'
console.log(parseInt(nums))

// parseFloat(num) => prosesnya sama seperti parseInt yang mengonversikan string ke angka desimal
nums = '12.6cm'
console.log(parseFloat(nums))

// konversi eksplisit dilakukan oleh runtime javascript hal ini terjadi ketika melakukan operasi
// aritmatika atau proses logika

let results
let angka = 11

results = "usia saya " + angka
console.log(results)

results = angka * 22
console.log(results)