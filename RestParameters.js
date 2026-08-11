// RestParameter memungkinkan sebuah function dapat menerima argumen lebih dari satu
// kemudian mengembalikannya sebagai object array 

let data = null

function getNames(...names){
    return names
}

data = getNames("rudi", "eka", "mahmud", "basit")

console.log(data)

function getStudent(x, ...data){
    return {
        id:x,
        students:data
    }
}

data = getStudent(1, "rudi", "mahmud", "eka", "messi")

console.log(data)

function reverseStr(...str){
   
    let temp = null;

    for(let item of str){
        temp = item
    }

    return temp.reverse().join("")
}

let x = "hello"
data  = reverseStr(x.split(''))

console.log(data)

console.log(Array.from("Dicoding"))