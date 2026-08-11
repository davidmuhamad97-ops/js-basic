function sumNums(func, ...args){
    
    let sum = 0

    for (let i = 0; i < args.length; i++){
        sum += func(args[i])
    }

    return sum
}

function nums(item){
   return item
}

let results = sumNums(nums, 4, 1, 3, 2)

console.log(results)