// mendefinisikan class pada javascript

class SmartPhone{

    constructor(color, brand, model){
        this.color = color
        this.brand = brand
        this.model = model
    }

    charging(){
        console.log(`${this.model} chargins`)
    }
}

class IOS extends SmartPhone{

    splitScreen(){
        console.log("IOS has fiture splitScreen")
    }
}

class Android extends SmartPhone{

    airDrop(){
        console.log("Android has fiture airDrop")
    }
}

let ios = new  IOS("green", "IOS", "IOS 17 PRO Max")
let android = new Android("red", "Android", "Samsung Galaxy S6")

ios.splitScreen()
ios.charging()

android.airDrop()
android.charging()

// instanceof adalah operator yang berfungsi untuk memeriksa apakah sebuah objek merupakan 
// instance dari class atau fungsi constructor dan mengembalikan nilai boolean

console.log(ios instanceof IOS)
console.log(android instanceof Android)


class Person{

    constructor(name){
        this.name = name
    }
}

class Student extends Person{

    constructor(name, grade){

        // super => keyword yang berfungsi untuk mengakses property atau method 
        // pada class induknya

        super(name)
        this.grade = grade
    }
}

let student = new Student("Andy")
console.log("Nama saya " + student.name)