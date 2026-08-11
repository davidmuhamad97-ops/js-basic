function sumNums(a, b){
    return a + b
}

let operations = function(a, b, sums){
    return sums(a, b)
}

let hasil = operations(11, 11, sumNums)

console.log("Hasil " + hasil)