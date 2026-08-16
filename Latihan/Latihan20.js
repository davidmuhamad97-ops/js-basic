let data = {
        name: "david",
        age: 30,
        status: "single"
    }

function person(item){
    let temp = item
    return () => {
        let obj = {...data}
        obj.name = temp

        return obj
    }
}

console.log(data)
const result1 = person("yusuf")
console.log(result1())
const result2 = person("endan")
console.log(result2())
console.log(data)