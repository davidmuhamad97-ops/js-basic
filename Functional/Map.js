// mendefinikan fungsi map yang mengambil sebuah array dan sebuah fungsi sebagai argumen
const nums = function(arr){
    return arr.map(item => Math.pow(item, 2))
}

/**
 * 
 * syntax method map:
 * array.map(callback(element, index, array), thisArg)
 * callback: fungsi yang akan dijalankan pada setiap elemen array. Fungsi ini menerima tiga argumen:
 * - element: elemen saat ini yang sedang diproses dalam array.
 * - index (opsional): indeks dari elemen saat ini yang sedang diproses dalam array.
 * - array (opsional): array yang sedang diproses.
 * thisArg (opsional): nilai yang digunakan sebagai this saat menjalankan callback.
 * 
 */

console.log(nums([1, 2, 3, 4, 5]))

// melakukan modifikasi pada suatu array of object dengan menggunakan metode map
let students = [
    {name: "andi", age: 19},
    {name: "budi", age: 21},
    {name: "caca", age: 17},
]

const newStudents = students.map(item => {
    return {
        name:item.name.toUpperCase(),
        age: Math.pow(item.age, 2)
    }
})

console.log(newStudents)

// melakukan proses tranformasi objek dan mengambil ID saja dari setiap objek dalam array
let users = [
    {id: 1, name: "andi"},
    {id: 2, name: "budi"},
    {id: 3, name: "caca"},
]

const getsId = users.map(item => item.id).sort((a, b) => b - a)
console.log(getsId)

// menambahkan elemen menggunakan indeks dari array dengan metode map
let numbers = [4, 1, 3, 2]

const addIndex = numbers.map((item, idx) => {
    return item + idx
}) 

console.log(addIndex)

// mengubah array of string menjadi array of number dengan metode map
let chars = ['1', '2', '3', '4']
const toNumber = chars.map((item) => parseInt(item))
console.log(toNumber)

