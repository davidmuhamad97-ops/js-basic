function categorizeNums(input){

    if (typeof input !== 'number'){
        throw new Error("Input harus berupa bilangan bulat")
    }
    else{

        if (input === 0){
            return "Nol"
        }
        else if (input < 1){
           if (input < 0){
             return "Negatif"
           }
           else{
            return "Positif"
           }
        }
        else{
            for (let i = 2; i <= Math.sqrt(input); i++){
                if (input % i === 0){
                    
                    if (input % 2 === 0){
                        return "Genap"
                    }
                    else{
                        return "Ganjil"
                    }
                }
            }

            return "Prima"
        }
    }
}

try{
    console.log(categorizeNums(15)); // Output: "Ganjil"
    console.log(categorizeNums(12)); // Output: "Genap"
    console.log(categorizeNums(17)); // Output: "Prima"
    console.log(categorizeNums(0)); // Output: "Nol"
    console.log(categorizeNums(-5)); // Output: "Negatif"
    console.log(categorizeNums("a"))
}
catch(err){
    console.log(err.message)
}

let x = 1
for (let i = 0; i < 5; i++){
  console.log(i)
  x++
}

console.log(x)