// mendefinisikan Map 

const names = new Map(
  [
    ['nama', 'david'],
    ['alamat', 'cirebon'],
    ['usia', 21]
  ]
)

console.log(names)

// menambahkan elemen baru pada map menggunakan method set

let product = new Map()

product.set('productName', 'Air Jordan')
product.set('price', 12e6)
product.set('tax', 0.1)
product.set(new Date().getDate(), "tanggal beli")
product.set(new Date().getFullYear(), "tahun produksi")

console.log(product)

// mengakses elemen pada map berdasarkan key menggunakan method get 
console.log(product.get('tax'))
console.log(product.get('productName'))

// menghapus elemen map menggunakan method delete berdasarkan keynya
// method ini akan mengembalikan boolean 

console.log(product.delete(new Date().getFullYear()))
console.log(product.delete('fufufafa'))

console.log(product)

// melakukan iterasi pada Map kemudia menampilkan array pasangan key value
for(let prod of product.entries()){
  console.log(prod)
}

// Object.fromEntries() memastikan sebuah map atau array key value menjadi sebuah object

let x = Object.fromEntries(product)
console.log(x)