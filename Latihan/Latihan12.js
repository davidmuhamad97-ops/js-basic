import { sampleProducts } from "./ListProduct";

function getAllProducts(resolve, reject){ 

    let getProduct = sampleProducts
    
    if (getProduct.length !== 0){

        setTimeout(() => {
            resolve(sampleProducts)
        }, 3000);
        
    }
    else{
        setTimeout(() => {
            reject(errMessage)
        }, 3000);
        
    }
}

let promises = new Promise(getAllProducts)
promises
.then(items => {
    let getDiscountAllProducts = items.map(item => {
        item.price = item.price - (item.price * 0.1)
    })

    return getDiscountAllProducts
})
.then(data => console.log(sampleProducts))
.catch(() => console.log("Produk gagal di load"))