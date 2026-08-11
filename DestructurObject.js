// mengakses nilai property objek dengan destructuring

let products = {
    buah:"apple",
    price:9000,
    qty:1
}

const {buah, price, qty} = products

console.log(`
        buah : ${buah}
        harga : ${price}
        jumlah : ${qty}
    `)

// menggunakan nilai default pada object destructuring untuk mengganti property yang tidak ada
// pada objek

const {x = true} = products
console.log(x)

const {totalPrice = () => products.price * (products.qty = 4)} = products
console.log("Total price product Rp." + totalPrice())

let produk = {
    detailProduk:{
        name:"air jordan",
        price:10000,
        tax:0.5
    },
    qty:1,
    brand:"adidas"
}

function getProduct({detailProduk, jumlah, qty, merk}){

    jumlah = () => {
        return (detailProduk.price * qty) * detailProduk.tax
    }

    return `
        Nama produk : ${detailProduk.name}
        Harga : ${detailProduk.price}
        Pajak : ${detailProduk.tax}
        Brand : ${merk}

        Total harga : ${jumlah()}
    `
}

console.log(getProduct(produk))


// destructuring menggunakan array
let fruits = ['apel', 'mangga', 'anggur', 'melon']
let [a, y, z] = fruits

console.log(a)
console.log(y)
console.log(z)