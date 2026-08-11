import { sampleProducts } from "./ListProduct";

const fetchProduct = (data) => {

    return new Promise((resolve, reject) => {

      setTimeout(() => {
        if (data.length === 0){
         reject("Data is empty")
       }
        resolve(data)
      }, 2000)
    })
}

let getAllProduct = async (data) => {
    let products = await fetchProduct(data)
    let productById = await products.filter(item => item.id === 1)
    console.log(productById)
}


getAllProduct(sampleProducts)