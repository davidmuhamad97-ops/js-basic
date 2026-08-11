function twoSum(num, target){

    let temp = []

   for(let i = 0; i < num.length - 1; i++){

    let condition = false

    for(let j = i + 1; j < num.length; j++){
        let sum = num[i] + num[j]

        if (sum === target){
            temp.push(i)
            temp.push(j)
            condition = true

            break
        }
    }

    if (condition){
        break
    }
   }

    return temp
}

const result = twoSum([2, 7, 11, 15], 26)

console.log(result)