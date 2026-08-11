function oddNums(...args){

    return function(){
        
        let temp = []

        for (let item of args){
            if (item % 2 !== 0){
                temp.push(item)
            }
        }

        return temp
    }
}

let result = oddNums(1, 3, 2, 9, 4)

console.log(result())