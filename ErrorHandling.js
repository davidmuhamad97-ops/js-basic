// mendefinisikan error handling

// mendefinisikan error dengan constructor object

// const error = new Error("Terjadi Error")
// console.log(error)

// const syntaxErr = new SyntaxError("Kesalahan syntax")
// console.log(syntaxErr)

// let age = -2 

// if (age < 0){
//     // melemparkan error jika kondisi terpenuhi
//     throw new Error("Angka harus lebih dari 0")
// }

// menangani sebuah error pada 

let getAge = age => {
    
    try{
        if (age < 0){
            throw new Error("Angka harus lebih dari 0")
        }
        console.log("Umur saya " + age)
    }
    catch(err){
        console.log(err.message)
    }
}

getAge(-1)