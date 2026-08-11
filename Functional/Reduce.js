// method reduce pada array digunakan untuk mengakumulasi nilai dari setiap elemen dalam array menjadi satu nilai tunggal.

/**
 * 
 * syntax method reduce:
 * array.reduce(callback(accumulator, currentValue, index, array), initialValue)
 * callback: fungsi yang akan dijalankan pada setiap elemen array. Fungsi ini menerima empat argumen:
 * - accumulator: nilai yang diakumulasi dari hasil callback sebelumnya atau initialValue pada iterasi pertama.
 * - currentValue: elemen saat ini yang sedang diproses dalam array.
 * - index (opsional): indeks dari elemen saat ini yang sedang diproses dalam array.
 * - array (opsional): array yang sedang diproses.
 * initialValue (opsional): nilai awal untuk accumulator. Jika tidak disediakan, elemen pertama dari array akan digunakan sebagai initialValue dan iterasi dimulai dari elemen kedua.
 * 
 */

const nums = [3, 1, 2]

// contoh penggunaan method reduce untuk menjumlahkan semua elemen dalam array
const sumNum = nums.reduce((acc, curr) => acc + curr, 0)
console.log(sumNum) // Output: 6

// menggunakan reduce untuk mengalikan semua elemen dalam array
const factorial = nums.reduce((acc, curr) => acc * curr)
console.log(factorial) // Output: 6

// menghitung total harga produk dalam keranjang belanja
const cart = [
  { id: 1, name: 'Product 1', price: 5000 },
  { id: 2, name: 'Product 2', price: 1500 },
  { id: 3, name: 'Product 3', price: 2100 }
];

const totalPrice = cart.reduce((total, item) =>{
    return total + item.price
}, 0)

console.log("Total price is Rp." + totalPrice); // Output: 8600

const fruits = ["apple", "banana", "apple", "orange", "banana"];
let count = 1

// menghitung jumlah kemunculan setiap buah dalam array
const fruitCount = fruits.reduce((acc, items) => {

    if (acc.size === 0){
        acc.add({fruits:items, count:count})
    }
    else{
        for(let i of acc){
            if (acc.has(i) && i.fruits === items){
                i.count += 1
            }
            else{
                acc.add({fruits:items, count:count})
            }
        }
    }

    return acc;

}, new Set());

console.log(fruitCount);