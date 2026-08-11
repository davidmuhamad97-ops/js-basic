// mendefinisikan higher order function dimana fungsi didefinisikan sebagai argumen


let result = null

function multiply(func, ...args){

    let temp = [] 

    for(let i of args){
        temp.push(func(i))
    }

    return temp
}

function func(item){
    return Math.pow(item, 2)
}

result = multiply(func, 2, 3, 1, 4)

console.log(result)


// higher order function dimana fungsi didefinisikan sebagai return
function multiply2(...args){

    return function(){
        
        let temp = []

        for(let item of args){
            temp.push(Math.pow(item, 2))
        }

        return temp
    }
}

result = multiply2(2, 3, 1, 4)

console.log(result())

