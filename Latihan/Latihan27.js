class Product{
    
    #name
    #price

    constructor(name, price){
        this.#name = name
        this.#price = price
    }

    set price(price){
        
        if (price < 0){
            this.#price = 0
            return
        } 
        this.#price = price
    }

    get price(){
        return this.#price
    }

    get name(){
        return this.#name
    }
}

const product = new Product("Laptop", 15000000)

console.log("Harga : " + product.price)
product.price = 17000000
console.log("Harga : " + product.price)
product.price = -1000
console.log("Harga : " + product.price)




class Employee{
    
    #name
    #salary

    constructor(name, salary){
        this.#name = name
        this.#salary = salary
    }

    get name(){
        return this.#name
    }

    set salary(salary){
        this.#salary = salary
    }

    get salary(){
        return this.#salary
    }

    increaseSalary(salary){
        return this.#salary += salary
    }
}

const employee = new Employee(
    "David",
    10000000
);

console.log(employee.name);
// David

console.log(employee.salary);
// 10000000

employee.increaseSalary(2000000);

console.log(employee.salary);
// 12000000



class BankAccount{

    #owner
    #balance

    constructor(owner, balance){
        this.#owner = owner
        this.#balance = balance
    }

    get owner(){
        return this.#owner
    }

    set balance(balance){
        if (this.#balance < 0) throw new Error("Saldo tidak boleh negatif")
        this.#balance = balance
    }

    get balance(){
        return this.#balance
    }

    transfer(owner, balance){

        if (this.#balance < balance){
            throw new Error("Saldo tidak mencukupi")
        }

        if (balance <= 0){
            throw new Error("Saldo harus lebih dari 0")
        }

        this.#balance -= balance
        owner.balance += balance
    }
}

const davidAccount = new BankAccount("David", 1000000);
const johnAccount = new BankAccount("John", 500000);


davidAccount.transfer(johnAccount, 90000)
console.log(`${davidAccount.owner} - ${davidAccount.balance}`)
console.log(`${johnAccount.owner} - ${johnAccount.balance}`)
