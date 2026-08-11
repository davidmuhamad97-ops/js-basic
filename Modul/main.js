// mendefinisikan import default 

//import products from './Employee.js'

// import  default memungkinkan kita menggunakan nama berbeda 
import produk from "./Employee"

// import named memungkinkan mengimpor lebih dari satu function/variable/method dari module lain 
// keyword as mengubah deklarasi nama sebuah function/method/name apabila terdapat nama yang sama 
import { names, grade } from "./Employee"
import { getStudent, names as nama } from "./Students"

let {nameProduct, price, tax} = produk()

let diskonPrice = () => {
    return price - (price * tax)
}

console.log(`
        Nama produk : ${nameProduct}
        Price : ${price}
        Pajak : ${tax}
        Diskon price : ${diskonPrice()}
    `)


function students(){
    
    let studentMaps = new Map()

    try
    {
        if (names.length !== grade.length){
            throw new Error("Panjang harus sama")
        }

        for(let i = 0; i < names.length; i++){
            studentMaps.set(names[i], grade[i])
        }
    }
    catch(err){
        console.log(err.message)
        return null
    }

    return studentMaps;
}

let objStudents = Object.fromEntries(students())

console.log(objStudents)

console.log("daftar murid tadika mesra : \n" + nama)


let listStudent = []

listStudent.push(getStudent({"name":"rudy", "grade":3.25}))
listStudent.push(getStudent({"name":"ruwahyu", "grade":3.94}))
listStudent.push(getStudent({"name":"wahyu", "grade":2.65}))

let listStudentSort = listStudent.sort((a, b) => b.grade - a.grade)

for(let item of listStudentSort){
    console.log(`
        Nama : ${item.name}
        IPK : ${item.grade}
        `)
}
