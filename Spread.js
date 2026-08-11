// spread operator berfungsi untuk melakukan proses iterasi terhadap tipe data object bersifat iterable
// memudahkan dalam proses penggabungan.

const obj1 = {name:"david", age:23}
const obj2 = {address:"cirebon"}
const hoby = ["futsal", "musik", "membaca"]

const profile = {...obj1, ...obj2, hobi: [...hoby]}

console.log(profile)

// mwnyalin sebuah object ke dalam variable lain

let product = {
    productId:1,
    nameProduct:"Adidas Air Jordan",
    tax:0.1,
    price:150000
}

let newProduct = {...product}

console.log(newProduct)

let names = ["rudi", "bambang", "bayu", "eka"]
let newName = [...names]

console.log(newName)

// mencari elemen terbesar dan terkecil dalam array 

let nums = [4, 1, 8, 2, 5]

console.log("Maximal is " + Math.max(...nums))
console.log("Minimum is " + Math.min(...nums))

// membalikan sebuah string 
let str = "kontol jaran"
let reverse = [...str].reverse().join("")

console.log(reverse)

// menyalin sisa elemen dalam proses destructuring pada array
let fruits = ["mangga", "jeruk", "anggur", "apel", "pepaya", "alpukat"]
let [a, b, ...c] = fruits

console.log(a)
console.log(b) 
console.log(c)