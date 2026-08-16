// ============================================================
// KONSEP OBJECT PADA JAVASCRIPT SECARA MENDALAM
// ============================================================
// Object adalah tipe data REFERENSI (mutable) yang menyimpan
// kumpulan data (property) dan perilaku (method) dalam pasangan
// key: value. Key bertipe string/symbol, value bisa apa saja
// (primitive, array, fungsi, bahkan objek lain).
//
// CARA MEMBUAT OBJECT:
//   1. Object literal  : let obj = { key: value }
//   2. new Object()    : let obj = new Object()
//   3. Constructor fn  : function Person(){}; new Person()
//   4. Object.create() : let obj = Object.create(proto)
//
// AKSES PROPERTY:
//   1. Dot notation   : obj.key   (key harus identifier valid)
//   2. Bracket        : obj["key"] atau obj[variabel] (untuk key
//      dinamis / tidak valid sebagai identifier, mis. "kata kunci"
//      atau key dari variabel)
//
// PERILAKU PENTING:
//   - Mutability: objek dikirim pass by reference; mengubah objek
//     di satu variabel ikut terlihat di variabel lain yang berbagi
//     referensi. Salinan dalam (deep copy) butuh cara khusus.
//   - Property bisa ditambah/diubah/dihapus kapan saja.
//   - Operator "in" memeriksa keberadaan key (termasuk dari
//     prototype), sedangkan obj.hasOwnProperty() hanya milik sendiri.
//   - "delete" menghapus property milik objek.
//   - Computed property: key dihitung dari ekspresi dalam [].
//   - Method shorthand: { greet() {} } setara { greet: function() {} }.
//   - "this" di dalam method menunjuk ke objek pemanggil.
// ============================================================

// mendefinisikan object

let students = {
    name: "david",
    age:21,
    address:"jln asram tni desa junjang kecamatan arjawinangun",
}

// mendefinisikan object kosong
let empty = {}


// mengakses nilai property 

console.log(students.name) // david
console.log(students.age) // 28
console.log(students.address) // jln asram tni desa junjang kecamatan arjawinangun

console.log(students["name"])
console.log(students["age"])
console.log(students["address"])

function getStudents(){
    return students
}

let data = getStudents()

console.log("Nama : " + data.name)
console.log("Usia : " + data.age)

// menghapus property dengan keyword delete

delete students.address 

console.log(students)

// mendefinisikan property terkomputasi pada object

let str = "apple"

let fruits = {
    [str]: 5
}

console.log(fruits)

// memeriksa suatu keberadaan property pada object dengan operator in

console.log("name" in students)

let x = "age"
console.log(x in students)

// mengubah nilai pada property objek 
students.name = "yono"

console.log(students)

// menambahkan property baru ke dalam objek
students.isLive = true 

console.log(students)

// ============================================================
// CONTOH PENERAPAN KONSEP DI ATAS
// ============================================================

// 1. Property berisi fungsi => disebut method
const kalkulator = {
    nilai: 10,
    tambah: function (x) {
        this.nilai += x; // "this" menunjuk ke objek kalkulator
        return this.nilai;
    },
    // method shorthand (ES6) — lebih ringkas
    kurang(x) {
        this.nilai -= x;
        return this.nilai;
    },
};

console.log(kalkulator.tambah(5)); // 15
console.log(kalkulator.kurang(3)); // 12

// 2. Nested object (objek di dalam objek)
const user = {
    nama: "David",
    alamat: {
        kota: "Cirebon",
        provinsi: "Jawa Barat",
    },
    hobi: ["ngoding", "membaca"], // array sebagai value
};

console.log(user.alamat.kota); // Cirebon
console.log(user.hobi[0]); // ngoding

// 3. Memeriksa property milik sendiri vs dari prototype
console.log(user.hasOwnProperty("nama")); // true
console.log(user.hasOwnProperty("toString")); // false (dari prototype)

// 4. Menyalin object (shallow copy) — level 1 saja
const user2 = { ...user }; // spread: properti level 1 terpisah
user2.nama = "Budi"; // tidak mempengaruhi user
console.log(user.nama); // David (tetap)
// TAPI objek bersarang (alamat) masih berbagi referensi:
user2.alamat.kota = "Bandung";
console.log(user.alamat.kota); // Bandung (ikut berubah!)

// 5. Object.keys / values / entries — enumerasi property
console.log(Object.keys(user)); // ['nama', 'alamat', 'hobi']
console.log(Object.values(user)); // ['David', {...}, [...]]

// 6. Menampilkan daftar key dari objek students
console.log(Object.keys(students));

