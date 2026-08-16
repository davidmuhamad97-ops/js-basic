// ============================================================
// KONSEP TEORI HIGHER ORDER FUNCTION (HOF)
// ============================================================
// Dalam paradigma functional programming, fungsi diperlakukan
// sebagai "first-class citizen" (nilai kelas satu). Artinya,
// fungsi bisa disimpan dalam variabel, dikirim sebagai argumen,
// dan dikembalikan sebagai hasil — sama seperti angka atau string.
//
// Higher Order Function adalah fungsi yang memanfaatkan sifat ini
// dengan memenuhi minimal SATU dari dua syarat berikut:
//
//   1. Menerima fungsi lain sebagai argumen (callback),
//   2. Mengembalikan fungsi lain sebagai nilai balik (closure).
//
// Sebaliknya, fungsi yang hanya menerima/mengembalikan data biasa
// disebut "first-order function".
//
// Manfaat HOF:
//   - Abstraksi: menyembunyikan detail proses (mis. perulangan).
//   - Reusable: logika umum ditulis sekali, perilaku khusus di-inject
//     lewat callback.
//   - Komposisi: fungsi kecil dapat dirangkai membentuk logika kompleks.
//
// Contoh HOF bawaan JS: map, filter, reduce, forEach, sort, setTimeout.
// ============================================================

// HOF #1: Menerima fungsi sebagai argumen (callback)
function terapkan(fn, nilai) {
  return fn(nilai);
}

const kaliDua = (x) => x * 2;
console.log(terapkan(kaliDua, 5)); // 10
console.log(terapkan((x) => x + 1, 5)); // 6

// HOF #2: Mengembalikan fungsi (closure)
function buatPenambah(tambahan) {
  return function (angka) {
    return angka + tambahan;
  };
}

const tambah5 = buatPenambah(5);
console.log(tambah5(10)); // 15

// HOF bawaan JavaScript
const angka = [1, 2, 3, 4, 5];

const genap = angka.filter((n) => n % 2 === 0); // [2, 4]
const kuadrat = angka.map((n) => n * n); // [1, 4, 9, 16, 25]
const total = angka.reduce((acc, n) => acc + n, 0); // 15

console.log(genap);
console.log(kuadrat);
console.log(total);
