function createGreeting(item){
    return (item2) => {
        return `Good ${item2}, ${item}`
    }
}

const greeting = createGreeting("david")
console.log(greeting("morning"))
console.log(greeting("afternoon"))
