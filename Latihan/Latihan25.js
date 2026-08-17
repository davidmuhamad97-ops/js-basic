class Person{
    constructor(name, age){
        this.name = name
        this.age = age
        // console.log(this)
    }

    printData(){
        return `Nama saya ${this.name} usia saya sekarang ${this.age}`
    }
}

const person1 = new Person("yudi", 21)
const person2 = new Person("iwan", 34)

console.log(person1.printData())
console.log(person2.printData())


class Person2{
    name = "";
    age = 0;

    constructor(name, age){
        this.name = name
        this.age = age
    }

    set setName(name){
        if (/\d/.test(name)){
            throw new Error("Nama tidak boleh mengandung karakter angka")
        }

        this.name = name
    }

    get getName(){
        return this.name
    }

    set setAge(age){
        if (this.age < 0){
            throw new Error("Usia harus lebih dari 0")
        }

        this.age = age
    }

    get getAge(){
        return this.age
    }
}

const person3 = new Person2("ihan", 12)
console.log("Nama saya " + person3.getName)