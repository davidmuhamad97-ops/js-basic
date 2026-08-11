let products = [
    {id:1, name:"apple vision", price:10000},
    {id:2, name:"nintendo sonic", price:210000},
    {id:3, name:"samsung galaxy", price:123000}
]


// mendefinisikan promise.all untuk menangani beberapa objek promise
const getPromises = function(time, product){
    return new Promise((resolve, reject) => {
        try{

            // jika salah satu promise gagal 
            if (time === 2000) reject("Connection TimeOut")

            if (product.length === 0){
                setTimeout(() => {
                    reject("Data NotFound")
                }, time)
            }
            else{
                setTimeout(() => {
                    resolve(product)
                }, time)
            }
        }
        catch(err){
            console.log(err)
        }
    })
}

let temp = [] 
let durations = [1000, 2000, 3000]

durations.map(item => {
    return temp.push(getPromises(item, products))
})

Promise.all(temp)
.then(item => console.log(item))

