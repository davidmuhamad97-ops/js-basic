
// pure function
function sum(a, b){
    return a + b 
}

console.log(sum(3, 2))
console.log(sum(3, 2))


// impure function
let x = 0

// fungsi ini dikatakan impure function sebab mengubah akses variable global
function sum2(a, b){
    x = a + b 

    return x 
}

sum2(3, 2)
console.log("x is " + x)

sum2(3, 2)
console.log("x is " + x)


// pure function
function counter(x){
    return x++
}

let a = counter(0)

for(let i = a; i < 5; i++){    
    console.log(i)
}