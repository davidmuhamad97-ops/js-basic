// mendefinisikan object

let students = {
    name: "david",
    age:21,
    address:"jln asram tni desa junjang kecamatan arjawinangun",
}

// mendefinisikan object kosong
let empty = {}


// mengakses nilai property 

console.log(students.name) // david
console.log(students.age) // 28
console.log(students.address) // jln asram tni desa junjang kecamatan arjawinangun

console.log(students["name"])
console.log(students["age"])
console.log(students["address"])

function getStudents(){
    return students
}

let data = getStudents()

console.log("Nama : " + data.name)
console.log("Usia : " + data.age)

// menghapus property dengan keyword delete

delete students.address 

console.log(students)

// mendefinisikan property terkomputasi pada object

let str = "apple"

let fruits = {
    [str]: 5
}

console.log(fruits)

// memeriksa suatu keberadaan property pada object dengan operator in

console.log("name" in students)

let x = "age"
console.log(x in students)

// mengubah nilai pada property objek 
students.name = "yono"

console.log(students)

// menambahkan property baru ke dalam objek
students.isLive = true 

console.log(students)

