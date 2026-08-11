// deklarasi tipe data string 

// petik tunggal
let name = 'david'
// petik ganda 
name = "david"
// bactick 
name = `david`

console.log(name)


let message = `
    salam interaksi
    salam interupsi
    salam transaksi
    salam ereksi
`

console.log(message)

// mengakses ekspresi dengan backtick 
name = 'agus'

console.log(`name ${name}`)

// ekspresi string dengan unicode
console.log( "\u00A9" ); // ©
console.log( "\u{20331}" ); // 佫, sebuah karakter mandarin (unicode panjang)
console.log( "\u{1F60D}" ); // 😍, sebuah simbol wajah tersenyum (unicode panjang lainnya)

// length property yang mengembalikan panjang dari suatu string
console.log(`panjang ${name.length}`)

// mengakses karakter pada suatu string menggunakan [], indeks karakter dimulai dari 0
// jika indeks melebihi panjang string maka akan mengembalikan undefined

let str = 'hello'

console.log(str[0]) // h
console.log(str[str.length - 1]) // o 

// charAt() method yang mengembalikan karakter berdasarkan indeks jika argumen indeks melebihi
// panjang string maka akan mengembalikan string kosong.

console.log(str.charAt(2)); // l 
console.log(str.charAt(str.length - 1)) // o 

// string dalam pada javascript bersifat immutable sehingga tidak dapat diubah setelah dibuat
str = 'HI, David'

//str[0] = 'h' // error

// toLowerCase mengubah string menjadi huruf besar
// toUpperCase mengubah string menjadi huruf kecil 

console.log(str.toUpperCase())
console.log(str.toLowerCase())

console.log(str[4].toLowerCase())
console.log(str[str.length - 1].toUpperCase())

// indexOf method ini berfungsi untuk mengembalikan substring didalam string 
// menggunakan indeks yang diberikan

name = 'hello my name is david'

console.log(name.indexOf('name'))
console.log(name.indexOf('lo', 1))


// 'includes(substr, idx)/includes(substr)' mengembalikan true/false berdasarkan substring didalam string tersebut

name = 'hello my friend'

console.log(name.includes("my")) // true
console.log(name.includes("friend", 2)) // true
// hello tidak ditemukan pada index 1
console.log(name.includes("hello", 1)) // false

//startsWith() mengembalikan true/false berdasarkan karakter awal dari substring yang ditentukan

name = "hello in the world"

console.log(name.startsWith("hello")) // true
console.log(name.startsWith("world")) // false
console.log(name.startsWith("in", 6)) // true
console.log(name.startsWith("the", 9)) // true


