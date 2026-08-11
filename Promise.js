// mendefinisikan Promise

import { get } from "express/lib/response"

// resolve adalah callback function yang dijalankan ketika Promise berhasil diselesaikan
// reject adalah callback function yang dijalankan ketika Promise gagal diselesaikan

function promiseFunc(resolve, reject){

    let isSuccess = false

    if(isSuccess){
        resolve("Promise berhasil diselesaikan")
    }
    else{
        reject("Promise gagal diselesaikan")
    }
}

// new Promise adalah objek yang akan menjalankan fungsi asyncronous promise
let myPromise = null

myPromise = new Promise(promiseFunc)
.then(message => console.log(message)) // menangani hasil resolve
.catch(error => console.log(error)) // menangani hasil reject


// contoh penggunaan Promise dengan operasi asyncronous menggunakan setTimeout
let products = [
    {id:1, name:"apple vision", price:10000},
    {id:2, name:"nintendo sonic", price:210000},
    {id:3, name:"samsung galaxy", price:123000}
]

function getAllProducts(resolve, reject){
    
    let getProduct = products.length 

    if (getProduct !== 0){
        setTimeout(() => {
            resolve(products)
        }, 2000)
    }
    else{
        reject("Product gagal di load")
    }
}

myPromise = new Promise(getAllProducts)

myPromise
.then(item => console.log(item))
.catch(err => console.log(err))

// melakukan proses chaining pada pemanggilan promise
myPromise = new Promise(getAllProducts)
myPromise
.then(item => {
    let x = item.filter(i => i.id === 2)

    return x
})
.then(data => data.forEach(x => console.log(x)))
.catch(err => console.log(err))



