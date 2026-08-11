// sebelum menggunakan function

const res = require("express/lib/response")

// konversi suhu celcius ke fahrenheit
const celcius = 90
const fahrenheit = 9/5 * (celcius) + 32
console.log("Fahrenheit = " + fahrenheit)

// setelah menggunakan function

// konversi suhu celcius ke fahrenheit

function convertToFahrenheit(celcius){
    
    // local variable => variable yang didefinisikan didalam scope function dan hanya dapat diakses
    // didalam body function
    const fahrenheit = 9/5 * (celcius) + 32

    console.log(fahrenheit)
}

// call function
convertToFahrenheit(11)

// outter vairable => variable yang didefinisikan di luar scope function dan dapat diakses secara global
// jika ada variable dengan nama yang sama didalam function maka outter variable akan ditimpa
let name = 'david'

function getName(){

    console.log("Nama : " + name)
}

getName()

let str = "hello world"

function printTxt(str){

    // kondisi untuk menentukan apakah parameter itu bernilai undefined
    if (str === undefined){
        return
    }

    console.log(str)
} 

// call function not arguments
printTxt() // undifined

// default parameter => nilai default yang didefinisikan untuk parameter jika function tidak 
// menyertakan argumen maka parameter akan menggunakan nilai default parameter
function sumNums(a = 5, b = 1){
    let sum = a + b 
    console.log("Sum is " + sum)
}

// with argument
sumNums(11, 4) // sum = 15 

// wtihout argument
sumNums() // sum = 6

// mendefinisikan fungsi return 
function timesNum(a = 5, b = 2){
    return a * b 
}

console.log("Result " + timesNum(11, 2))
console.log("Result " + timesNum())// NaN or default value

// mendeklarasikan function expression 

const convertToFahrenheit2 = function (celcius = 5){
    return 9/5 * (celcius) + 32
}

console.log("Result " + convertToFahrenheit2(11))
console.log("Result " + convertToFahrenheit2())

function say(){
    return "hello"
}

let prints = say
console.log(prints)


// function sebagai parameter 

function sumNums2(a, b){
    return a + b 
}

const getNums = function(a, b, sum){
    return sum(a, b) // a + b
}

let result = getNums(11, 2, sumNums2)

console.log(result)

// mengembalikan function sebagai function lain

function operations(a, b){
    return function(){
        return a + b
    }
}

let temps = operations(11, 11)

console.log(`a + b = ${temps()}`)