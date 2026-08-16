
// ============================================================
// KONSEP PURE FUNCTION vs NOT PURE FUNCTION (IMPURE)
// ============================================================
// PURE FUNCTION (fungsi murni) adalah fungsi yang:
//   1. Deterministik => untuk input yang sama, selalu menghasilkan
//      output yang sama.
//   2. Tanpa efek samping (side effect) => tidak mengubah state
//      global, variabel di luar scope, argumen asli, maupun hal
//      eksternal (console, file, database, dll).
//   3. Hanya bergantung pada parameter/argumennya sendiri.
//
// NOT PURE / IMPURE FUNCTION adalah kebalikannya, yaitu fungsi yang:
//   1. Bergantung pada atau mengubah state di luar dirinya
//      (misal variabel global), dan/atau
//   2. Memiliki efek samping (console.log, mutasi objek/array,
//      akses waktu/random, I/O), sehingga output bisa berbeda
//      untuk input yang sama.
//
// Manfaat pure function: mudah diuji, mudah diprediksi, mudah
// dipakai ulang, dan aman dijalankan paralel / berulang kali.
// ============================================================

// PURE FUNCTION: input sama (3, 2) => output selalu sama (5),
// tidak mengubah variabel apa pun di luar fungsi.
function sum(a, b){
    return a + b 
}

console.log(sum(3, 2))
console.log(sum(3, 2))


// IMPURE FUNCTION (not pure): mengubah variabel global x (side effect).
// Akibatnya, memanggil sum2(3, 2) berkali-kali mengubah state program,
// dan hasil fungsi bergantung pada/mempengaruhi lingkungan luar.
let x = 0

// fungsi ini dikatakan impure function sebab mengubah akses variable global
function sum2(a, b){
    x = a + b 

    return x 
}

sum2(3, 2)
console.log("x is " + x)

sum2(3, 2)
console.log("x is " + x)


// PURE FUNCTION (konsep yang salah dipahami di sini):
// counter(x) terlihat "murni" karena hanya membaca argumen, TAPI
// x++ sebenarnya mengubah argumen lokal dan mengembalikan nilai
// SEBELUM dinaikkan (post-increment). Konsep yang benar: hindari
// mutasi; kembalikan nilai baru tanpa mengubah apa pun.
// counter(0) => selalu 0, tidak mengubah variabel di luar fungsi.
function counter(x){
    return x++
}

let a = counter(0)

for(let i = a; i < 5; i++){    
    console.log(i)
}