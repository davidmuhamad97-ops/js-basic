// deklarasi tipe data angka

let bil = 1000_000

console.log(bil)

// e merupakan simbol yang merepresentasikan jumlah 0
bil = 1e6

console.log(bil)

let miliseconds = 0.00001

console.log(miliseconds)

// e- merepresentasikan jumlah nol di sebelah kiri angka awal
miliseconds = 1e-6

console.log(miliseconds)

// Math.floor => membulatkan angka desimal ke bawah
console.log(Math.floor(3.1))
console.log(Math.floor(2.5))
console.log(Math.floor(1.0))

// Math.cell => membulatkan angka desimal ke atas
console.log(Math.ceil(3.1))
console.log(Math.ceil(2.5))
console.log(Math.ceil(1.0))

// Math.round => membulatkan ke bilangan bulat terdekat 
console.log(Math.round(3.1))
console.log(Math.round(2.5))
console.log(Math.round(1.0))

// Math.trunc => menghapus bilangan di belakang koma tanpa dibulatkan
console.log(Math.trunc(3.1)) 
console.log(Math.trunc(2.5)) 
console.log(Math.trunc(1.0))

// infinity => nilai yang dikembalikan ketika operasi aritmatika tidak terdefinisi
console.log(10/0)

//NaN => nilai yang dikembalikan ketika nilai non number dikonversi menjadi number
console.log(Number('a'))