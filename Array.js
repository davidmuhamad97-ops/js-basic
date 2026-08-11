// deklarasi array 

let names = ["rudi", "eka", "wahyu"]

console.log(names)

// deklarasi array menggunakan objek konstruktor
names = new Array(5) // length = 5

console.log(names)

// deklarasi array menggunakan syntax Array.from
names = Array.from("david")

console.log(names)

// menyalin array dari array lain
names = new Array('yudi', 'erik')
let names2 = Array.from(names)

console.log(names2)

// mengakses elemen menggunakan indeks
names = ["rudi", "messi", "bambang", "fadli"]

console.log(names[0]) // rudi
console.log(names[names.length - 1]) // fadli

// mengubah elemen pada array menggunakan indeks
names[2] = "nurdin" 
names[0] = "deri"

console.log(names)

// menambahkan elemen baru menggunakan push dan mengembalikannya sebagai elemen terakhir
names.push("jokowi")
names.push("indra")

console.log(names)

// menghapus elemen array menggunakan keyword delete

// delete by index of 2
delete names[2]

// delete by index of ended
delete names[names.length - 1]

console.log(names)

// menghapus elemen menggunakan splice

/**
 * splice(idx, jml)
 * 
 * idx => mengacu pada indeks elemen
 * jml => mengacu pada jumlah elemen yang dihapus
 * 
 */

names.splice(2, 1)
names.splice(names.length - 1, 1)
names.splice(2, 2)

console.log(names)

names.push("nurdin")
names.push("eka")
names.push("indra")

// menghapus elemen terakhir menggunakan pop
names.pop()
names.pop()

console.log(names)

// menghapus elemen depan menggunakan shift 
names.shift()
names.shift()

console.log(names)


// implementasi stack dengan array 

/**
 * 
 * stack = []  
 * 
 * // proses push
 * 
 * stack->push(4) = [4]
 * stack-push(2) =  [4, 2]
 * stack->push(1) = [4, 2, 1]
 * stack->push(3) = [4, 2, 1, 3]
 * 
 * // proses pop
 * 
 * stack = [4, 2, 1, 3]
 * 
 * stack->pop() = 3 <-> [4, 2, 1]
 * stack->pop() = 1 <-> [4, 2]
 * stack->pop() = 2 <-> [4]
 * 
 */

let stacks = [] 

stacks.push(4)
stacks.push(2)
stacks.push(1)
stacks.push(3)

console.log(stacks.length)
console.log(stacks)

stacks.pop()
console.log(stacks.length)

// stacks.pop()
// stacks.pop()
// stacks.pop()

console.log(stacks)
