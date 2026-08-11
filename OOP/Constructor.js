// mendefinisikan constructor sebelum javascript ES6
function Person(name, age){
    this.name = name
    this.age = age 
}

// mendefinisikan method untuk objek Person
Person.prototype.eat = function(){
    console.log(`${this.name} has eaten`)
}

// inisialisasi objek Person 
const person1 = new Person("david", 32)
const person2 = new Person("ujang", 21)

person1.eat()
person2.eat()

// mendefinisikan constructor dengan arrow function
let Test = (hobi) =>{
    this.hobi = hobi 
}

// error sebab arrow function tidak dapat inisialisasi dengan keyword new

//let test = new Test(["makan", "tidur", "membaca"])
//console.log(test)


// mendefinisikan constructor function berbasis class 
class PersonClass{

    constructor(name, age){
        this.name = name
        this.age = age 
    }

    eat(){
        console.log(`${this.name} has eaten`)
    }
}

// membuat instance dari Person

const person = new PersonClass("idan", 31)
console.log("Name is " + person.name)
person.eat()