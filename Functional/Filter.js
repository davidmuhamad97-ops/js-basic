// method filter berfungsi untuk menyaring elemen-elemen dalam sebuah array berdasarkan kondisi tertentu yang ditentukan dalam fungsi callback.

/**
 * 
 * syntax method filter:
 * array.filter(callback(element, index, array), thisArg)
 * callback: fungsi yang akan dijalankan pada setiap elemen array. Fungsi ini menerima tiga argumen:
 * - element: elemen saat ini yang sedang diproses dalam array.
 * - index (opsional): indeks dari elemen saat ini yang sedang diproses dalam array.
 * - array (opsional): array yang sedang diproses.
 * thisArg (opsional): nilai yang digunakan sebagai this saat menjalankan callback.
 * 
 */

// contoh penggunaan method filter
const numbers = [4, 12, 5, 7, 10, 14];
const evenNumbers = numbers.filter(item => item % 2 === 0);
console.log(evenNumbers); // Output: [4, 12, 10, 14]

// proses filtering pada array object 
const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 78 },
  { name: 'David', score: 90 }
];

const highScorers = students.filter(student => student.score >= 90);
console.log(highScorers); // Output: [ { name: 'Bob', score: 92 }, { name: 'David', score: 90 } ]

// memfilter array dengan tipe data number 
const mixedArray = [1, 3, 5, null, 6, undefined]
const numbersOnly = mixedArray.filter(item => {
    return typeof item === 'number'
})

console.log(numbersOnly) // Output: [1, 3, 5, 6]

// memfilter price produk yang lebih besar dari $50
const products = [
  { id: 1, name: 'Product 1', price: 40 },
  { id: 2, name: 'Product 2', price: 60 },
  { id: 3, name: 'Product 3', price: 30 }
];

const expensiveProducts = products.filter(product => product.price > 50);
console.log(expensiveProducts); // Output: [ { id: 2, name: 'Product 2', price: 60 } ]

// mencari nama berdasarkan data karyawan
const employees = [
  { id: 1, name: 'John Doe', department: 'Sales' },
  { id: 2, name: 'Jane Smith', department: 'Marketing' },
  { id: 3, name: 'Sam Johnson', department: 'Sales' }
];

const getEmpls = employees.filter(item => {

    let condition = item.name.toLowerCase().includes('john')
    if (condition){
        return [].push({
            id: item.id,
            name: item.name,
            department: item.department
        })
    }
})

console.log(getEmpls); // Output: [ { id: 1, name: 'John Doe', department: 'Sales' }, { id: 3, name: 'Sam Johnson', department: 'Sales' } ]