
// mendefinisikan fungsi yang bukan pure function dengan mengubah data asli atau bersifat mutable
const names = function(names){
    let  idx = 0

    for(let i = 0; i < names.length; i++){
        names[idx] = names[i].toUpperCase()
        idx++
    }

    return names
}

console.log(names(['andi', 'budi', 'caca']))


// mendefinisikan fungsi yang pure function dengan tidak mengubah data asli atau bersifat immutable
const namesImmutable = function(names){
    let temp = []

    for(let item of names){
        temp.push(item.toUpperCase())
    }

    return temp
}

console.log(namesImmutable(['andi', 'budi', 'caca']))


// menggunakan metode map untuk membuat fungsi yang pure function dan bersifat immutable
const namesImmutableMap = function(names){
    return names.map(item=> item.toUpperCase())
}

console.log(namesImmutableMap(['andi', 'budi', 'caca']))

