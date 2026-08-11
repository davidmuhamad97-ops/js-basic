/**
 *  Set adalah struktur data yang menyimpan kumpulan nilai unik.
 *  Nilai dalam Set tidak berurutan dan tidak dapat diakses melalui indeks seperti array.
 *  Set menyediakan berbagai metode untuk menambahkan, menghapus, dan memeriksa keberadaan elemen.
 *  Syntax untuk membuat Set:
 *  let setName = new Set([iterable])
 * *  iterable: objek yang dapat diiterasi seperti array atau string (opsional).
 * *  Beberapa metode penting pada Set:
 * - add(value): Menambahkan elemen baru ke dalam Set.
 * - delete(value): Menghapus elemen dari Set.
 * - has(value): Memeriksa apakah elemen ada dalam Set.
 * - clear(): Menghapus semua elemen dari Set.
 * - forEach(callback(value, value2, set), thisArg): Menjalankan fungsi callback untuk setiap elemen dalam Set.
 * - size: Properti yang mengembalikan jumlah elemen dalam Set.
 * - values(): Mengembalikan iterator yang berisi nilai-nilai dalam Set.
 * - keys(): Sama seperti values(), karena Set tidak memiliki kunci terpisah.
 * - entries(): Mengembalikan iterator yang berisi pasangan [value, value] untuk setiap elemen dalam Set.
 * 
 */


// mendefinisikan set

let data = new Set()

data = new Set([1, 2, 3])

console.log(data)

// menambahkan elemen baru ke dalam set menggunakan method add
data.add(5)
data.add(2) // duplicate element

console.log(data)

// mengakses elemen pada set
for(let item of data){
    console.log(item)
}

console.log("\n")
data.forEach(item => console.log(item))

// menghapus elemen pada set menggunakan method delete
data.delete(3)

data.forEach(item => console.log(item))

let products = {
    id: 1,
    name: "Product 1",
    price: 1000
}

data.add(products)

products = {
    id:1,
    name: "Product 1",
    price: 1000
}

data.add(products)

console.log(data)

