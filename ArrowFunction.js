// ============================================================
// KONSEP ARROW FUNCTION SECARA MENDALAM
// ============================================================
// Arrow function (=>) adalah sintaks singkat untuk menulis fungsi
// yang diperkenalkan di ES6 (ECMAScript 2015). Secara konsep, ini
// adalah "shorthand" untuk function expression.
//
// BENTUK SINTAKS:
//   1. Satu parameter:   const fn = x => x * 2
//   2. Tanpa parameter:  const fn = () => "halo"
//   3. Banyak parameter: const fn = (a, b) => a + b
//   4. Block body:       const fn = (a, b) => { return a + b }
//   5. Mengembalikan objek: const fn = () => ({ nama: "David" })
//      (objek harus dibungkus kurung, karena { } dianggap block body)
//
// PERBEDAAN PENTING dengan function biasa (function declaration /
// function expression):
//
//   1. IMPLICIT RETURN: jika body hanya satu ekspresi (tanpa {}),
//      hasil ekspresi langsung dikembalikan tanpa kata kunci return.
//
//   2. TIDAK PUNYA OBJECT "arguments": arrow function tidak memiliki
//      objek arguments sendiri. Jika butuh, gunakan rest parameter:
//      const fn = (...args) => args.length
//
//   3. LEXICAL "this": arrow function TIDAK mengikat this sendiri.
//      Ia mewarisi this dari lingkup luarnya (lexical scope). Ini
//      mencegah masalah this pada callback. Fungsi biasa memiliki
//      this sendiri (bergantung cara dipanggil).
//
//   4. TIDAK BISA MENJADI CONSTRUCTOR: arrow function tidak bisa
//      dipakai dengan "new" (tidak punya prototype / [[Construct]]).
//
//   5. TIDAK HOISTING: arrow function adalah expression, sehingga
//      harus dideklarasikan DULU sebelum dipakai (beda dengan
//      function declaration yang di-hoist).
//
//   6. TIDAK MEMILIKI "super" dan "new.target".
//
// KAPAN DIPAKAI: untuk callback ringkas (map/filter/reduce), dan
// saat butuh mewarisi this dari konteks luar. Hindari jika butuh
// this sendiri, arguments, atau sebagai method objek (karena this
// tidak menunjuk ke objek pemilik).
// ============================================================

function convertToFahrenheit(celcius){
    return 9/5 * (celcius) + 32
}

// ubah ke arrow function 
const convertToFahrenheitArrow = celcius => 9/5 * (celcius) + 32
console.log(convertToFahrenheitArrow(11))

// deklarasi arrow function

/**
 * const func = parameters => {
 *   // statement
 * }
 * 
 * const func = (parameters1, parameters2) => {
 *    // statement
 * }
 * 
 * const func = parameters => statement
 */

function operations(sum){
    return sum 
}

let sumNums = operations((a, b) => a + b)

console.log("Sum is " + sumNums)

const greet = (name) => "Hello, " + name + "!";

console.log(greet("Bob"));

// ============================================================
// CONTOH PENERAPAN KONSEP DI ATAS
// ============================================================

// 1. Implicit return tanpa block body
const kuadrat = (n) => n * n; // satu ekspresi => langsung return
console.log(kuadrat(5)); // 25

// 2. Mengembalikan objek harus dibungkus tanda kurung
const buatObjek = (nama, umur) => ({ nama, umur });
console.log(buatObjek("David", 20)); // { nama: 'David', umur: 20 }

// 3. Tidak punya arguments object sendiri
function fungsiBiasa() {
    return arguments.length; // punya arguments
}
const arrowTanpaArguments = () => arguments.length; // tidak punya
console.log(fungsiBiasa(1, 2, 3)); // 3

// solusi: gunakan rest parameter
const arrowDenganRest = (...args) => args.length;
console.log(arrowDenganRest(1, 2, 3)); // 3

// 4. Lexical this: arrow mewarisi this dari lingkup luar
const tim = {
    nama: "Tim A",
    anggota: ["David", "Budi"],
    // function biasa: this menunjuk ke objek tim
    tampilkanBiasa: function () {
        return this.anggota.map(function (a) {
            return this.nama + ": " + a; // this = undefined/global
        });
    },
    // arrow: this diwarisi dari tampilkanArrow (yaitu objek tim)
    tampilkanArrow: function () {
        return this.anggota.map((a) => this.nama + ": " + a);
    },
};

console.log(tim.tampilkanArrow()); // ['Tim A: David', 'Tim A: Budi']
// console.log(tim.tampilkanBiasa()) => error (this bukan tim)

// 5. Tidak bisa menjadi constructor
const Person = (nama) => { this.nama = nama; };
// new Person("David") => TypeError: Person is not a constructor

// 6. Tidak hoisting => harus dideklarasikan sebelum dipakai
// console.log(tambah(2, 3)) => ReferenceError (belum didefinisikan)
const tambah = (a, b) => a + b;
console.log(tambah(2, 3)); // 5

