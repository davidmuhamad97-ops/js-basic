// ============================================================
// KONSEP CLOSURE
// ============================================================
// Closure adalah kombinasi antara sebuah fungsi dengan "lexical
// environment" (lingkup/scope) tempat fungsi tersebut dideklarasikan.
//
// Dalam JavaScript, fungsi bagian dalam (inner function) dapat
// mengakses variabel dari fungsi bagian luar (outer function).
// Yang membuatnya istimewa: inner function TETAP mengingat akses
// tersebut MESKIPUN outer function sudah selesai dieksekusi.
//
// Syarat terbentuknya closure:
//   1. Ada fungsi di dalam fungsi (nested function).
//   2. Fungsi dalam mengakses variabel dari fungsi luar.
//   3. Fungsi dalam "dibawa keluar" (dikembalikan/disimpan) sehingga
//      hidup lebih lama dari fungsi luarnya.
//
// Manfaat closure:
//   - Membuat "private variable" (variabel yang tidak bisa diakses
//     dari luar, seperti field private pada OOP).
//   - State/status tersimpan di antara pemanggilan fungsi.
//   - Dasar dari higher order function, partial application, dan
//     design pattern seperti module pattern.
// ============================================================

// Contoh 1: Dasar closure — fungsi dalam mengingat variabel luar
function outer() {
    let message = "Hello dari closure";

    // inner function mengakses variabel "message" dari outer
    return function inner() {
        console.log(message);
    };
}

const tampilkan = outer(); // outer() selesai, tapi inner tetap hidup
tampilkan(); // "Hello dari closure" — message masih diingat

// Contoh 2: Private variable / counter
// Variabel "count" tidak bisa diakses dari luar, hanya lewat
// fungsi yang dikembalikan (getter & increment).
function buatCounter() {
    let count = 0; // private variable

    return {
        increment: function () {
            count++;
            return count;
        },
        getCount: function () {
            return count;
        },
    };
}

const counterA = buatCounter();
console.log(counterA.increment()); // 1
console.log(counterA.increment()); // 2
console.log(counterA.getCount()); // 2
// console.log(counterA.count) => undefined (private)

// Setiap pemanggilan buatCounter() punya "count" sendiri (isolated)
const counterB = buatCounter();
console.log(counterB.increment()); // 1 (terpisah dari counterA)

// Contoh 3: Closure menyimpan nilai unik per iterasi
// Cara LAMA sebelum let/const: var tidak punya block scope.
function buatFungsiLoop() {
    const hasil = [];

    for (var i = 0; i < 3; i++) {
        hasil.push(function () {
            return i;
        });
    }

    return hasil;
}

const funcs = buatFungsiLoop();
console.log(funcs[0]()); // 3 — karena closure berbagi "i" yang sama
console.log(funcs[1]()); // 3
console.log(funcs[2]()); // 3

// Solusi: tangkap nilai i lewat parameter (IIFE), atau pakai let
function buatFungsiLoopBenar() {
    const hasil = [];

    for (let i = 0; i < 3; i++) {
        hasil.push(function () {
            return i;
        });
    }

    return hasil;
}

const funcsBenar = buatFungsiLoopBenar();
console.log(funcsBenar[0]()); // 0
console.log(funcsBenar[1]()); // 1
console.log(funcsBenar[2]()); // 2

// Contoh 4: Closure untuk membuat fungsi "factory" (pembuat fungsi)
function buatPengali(faktor) {
    // mengingat "faktor" setiap kali dipanggil
    return function (angka) {
        return angka * faktor;
    };
}

const kaliDua = buatPengali(2);
const kaliTiga = buatPengali(3);

console.log(kaliDua(10)); // 20
console.log(kaliTiga(10)); // 30