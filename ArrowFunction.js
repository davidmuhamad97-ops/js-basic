function convertToFahrenheit(celcius){
    return 9/5 * (celcius) + 32
}

// ubah ke arrow function 
const convertToFahrenheitArrow = celcius => 9/5 * (celcius) + 32
console.log(convertToFahrenheitArrow(11))

// deklarasi arrow function

/**
 * const func = parameters => {
 *   // statement
 * }
 * 
 * const func = (parameters1, parameters2) => {
 *    // statement
 * }
 * 
 * const func = parameters => statement
 */

function operations(sum){
    return sum 
}

let sumNums = operations((a, b) => a + b)

console.log("Sum is " + sumNums)

const greet = (name) => "Hello, " + name + "!";

console.log(greet("Bob"));

