// mendefinisikan fungsi callback

import { set } from "express/lib/response"

function greet(callback, name){
    console.log("Hello my name is " + callback(name))
}

function isName(name){
    return name
}

// call function greet
greet(isName, "david")

// representasi method get http 
const products = [
   {id:1, name:'apel mandarin', price:1000}
]

function getProducts(callback){
    console.log("Daftar produk :")
    setTimeout(() => {
        callback(products)
    }, 3000);
}

function displayProducts(products){
    products.forEach(element => {
        console.log(`Id: ${element.id}, Name: ${element.name}, Price: ${element.price}`);
    });
}

//call function getProducts
getProducts(displayProducts)

// menambahkan handle error pada callback function
function getData(error, callback){

    let sizeProduct = products.length

    if (sizeProduct === 0){
        error = true
    }

    console.log(error)

    setTimeout(() => {
        
        if (error){
          callback(true)
        }
        else{
          callback(false)
      }
    }, 2000)
}

function handleError(err){
    try{
        if (err){
            throw new Error({status:404, message:"Data Notfound"})
        }
    }
    catch(error){
        console.log(error.message)
    }
}

function handeSuccess(err){

    if (!err)
        products.forEach(element => {
            console.log(`Id: ${element.id}, Name: ${element.name}, Price: ${element.price}`);
        })
}

getData(false, handleError, handeSuccess)

