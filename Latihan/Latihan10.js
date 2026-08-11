import { set } from "express/lib/response";
import { sampleProducts, getProductById, getSampleProducts, deleteProduct, updateProduct } from "./ListProduct";

function getProducts(callback){
    console.log("Daftar produk :")
    
    setTimeout(() => {
        console.log(callback())
    }, 2000)

}

function getProductId(id, callback){

    let data = null

    try{
        if (id <= 0){
            throw new Error("Id tidak boleh kurang dari atau sama dengan 0")
        }

        setTimeout(() => {
            data = callback(id)
            console.log("produk dengan id " + data)
        }, 2000)
    }
    catch(err){
        console.log(err.message)
        return
    }
}

function updateProductsId(id, newProduct, callback){
    
    let product = null
    
    try{
        
        if (id <= 0){
            throw new Error("Id tidak boleh kurang dari atau sama dengan 0")
        }
        else{
            product = getProductById(id);
            return 
        }

        if (newProduct === null){
            throw new Error("Data produk baru tidak boleh null")
        }

        setTimeout(() => {
            callback(id, newProduct)
            console.log("produk dengan id " + id + " berhasil di update")
        }, 2000)
        
    }
    catch(err){
        console.log(err.message)
        return
    }
}

function deleteProducts(id, callback){
    try{
        
        if (id <= 0){
            throw new Error("Id tidak boleh kurang dari atau sama dengan 0")
        }
        setTimeout(() => {
            callback(id)
        }, 2000)
    }
    catch(err){
        console.log(err.message)
        return
    }
}

//call function getProducts
getProducts(getSampleProducts)

//call function getProductId
getProductId(3, getProductById)

//call function updateProductsId
updateProductsId(2, { id: 2, name: 'Smartphone', category: 'Electronics', price: 600 }, updateProduct)

//call function deleteProducts
deleteProducts(4, deleteProduct)