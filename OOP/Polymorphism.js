// mendefinisikan polymorphism  

class Person{
    
    #name
    #age

    constructor(name, age){
        this.#name = name
        this.#age = age
        
    }

    set setName(name){
        this.#name = name
    }

    set setAge(age){
        this.#age = age
    }

    get getName(){
        return this.#name
    }

    get getAge(){
        return this.#age
    }

    printName(){
        console.log(`Nama ${this.#name}\nUsia ${this.age}`)
    }
}

class Students extends Person{

    #grade

    // constructor overriding => constructor yang didefinisikan di sub class akan tetapi implementasinya
    // berbeda dari super classnya
    constructor(name, age, grade){

        // super berfungsi untuk mendefinisikan constructor overriding dan memanggil property dari super classnya
        super(name, age)
        this.grade = grade
    }

    set setGrade(grade){
        this.grade = grade
    }

    get getGrade(){
        return this.grade
    }

    // method overriding adalah method subclass yang didefinisikan sama persis dari super classnya akan tetapi
    // implementasinya berbeda 

    // mendefinisikan method overriding
    printName(){
        console.log(`Nama ${this.getName}\nUsia ${this.getAge}\nIPK ${this.getGrade}`)
    }
}

let student = new Students("uyun rafail", 32, 3.21)

student.printName()