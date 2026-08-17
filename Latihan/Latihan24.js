const student = {
    name: "David",
    age: 25,
    major: "Computer Science",
    isActivate: true
}

console.log("Name: " + student.name)
console.log("Age: " + student.age)
console.log("Major: " + student.major)
console.log("Is Activate: " + student.isActivate)


const user = {
    name: "David",
    age: 25,
    city: "Jakarta"
};

console.log(user.name)
console.log(user.age)
console.log(user["city"])


const product = {
    name: "Laptop",
    price: 10000000,
    stock: 10
};

product.price = 1200000
product.stock = 8 
product.category = "Electronic"

console.log(product)


const user2 = {
    firstName: "David",
    lastName: "Muhamad"
};

user2.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

console.log(user2.getFullName())

const account = {
    owner: "David",
    balance: 100000
};

account.deposit = function(amount){
    this.balance += amount
}

account.withDraw = function(amount){
   if (amount > this.balance){
        throw new Error("Saldo tidak mencukupi")
   }

   return this.balance -= amount
}

account.getBalance = function(){
    return this.balance
}

account.deposit(100000)
console.log(account.getBalance())

account.withDraw(120000)
console.log(account.getBalance())

// account.withDraw(82000)
// console.log(account.getBalance())


const user3 = {
    name: "David",
    age: 25,
    address: {
        street: "Jl. Sudirman",
        city: "Jakarta",
        postalCode: "10220"
    }
};

user3.address.city = "Bandung"

console.log("Nama: " + user3.name)
console.log("City: " + user3.address.city)
console.log("Postal Code" + user3.address.postalCode)




const employee = {
    name: "David",
    position: "Backend Developer",
    salary: 10000000,

    getAnnualSalary() {
        return this.salary * 12
    }
};

console.log(employee.getAnnualSalary())



const user4 = {
    name: "David",
    age: 25,
    email: "david@example.com"
};

const {name, age, email} = user4
console.log(name)
console.log(age)
console.log(email)


const product2 = {
    name: "Laptop",
    price: 15000000
};


const {productName = product2.name, productPrice = product2.price} = product2

console.log(productName)
console.log(productPrice)




const user5 = {
    name: "David",
    age: 25
};

const updateUser5 = {...user5}

console.log(user5)
console.log(updateUser5)



const personal = {
    name: "David",
    age: 25
};

const job = {
    position: "Backend Developer",
    company: "ABC"
};

const profile = {...personal, ...job}
console.log(profile)



const products = [
    {
        id: 1,
        name: "Laptop",
        price: 15000000
    },
    {
        id: 2,
        name: "Mouse",
        price: 300000
    },
    {
        id: 3,
        name: "Keyboard",
        price: 700000
    }
];

for(let item of products){
    console.log(`${item.name} - ${item.price}`)
}

let getProductsById = products.find(item => item.id == 2)
console.log(getProductsById)

let getProductsByPrice = products.filter(item => item.price > 1000000)
console.log(getProductsByPrice)


function createUser(name, age, role){
    
    return {
        name: name,
        age: age,
        role: role,
        getInfo(){
            return `${this.name} - ${this.age} - ${this.role}`
        }
    }
}

const user6 = createUser("David", 29, "Backend Developer")
console.log(user6.getInfo())




const cart = {
    
    items: [],

    addItem(product){
        this.items.push(product)
    },

    removeItem(productId){
        const getIdByProduct = this.items.filter(item => item.id == productId)[0]
        this.items.splice(getIdByProduct.id - 1, 1)
    },

    getTotal(){
        return this.items.reduce((acc, curr) => {
            return acc += curr.price;
        }, 0)
    }
}

cart.addItem({
    id: 1,
    name: "Laptop",
    price: 15000000,
    quantity: 1
});

cart.addItem({
    id: 2,
    name: "Mouse",
    price: 300000,
    quantity: 2
});

console.log(cart.getTotal())
cart.removeItem(2);
console.log(cart.items)
console.log(cart.getTotal())




function products3(){

    let emp = []
    return {

        addEmployee(item){
            this.emp.push(item)
        },

        removeEmp(id){
            const getIdByProduct = this.items.filter(item => item.id == productId)[0]
            emp.splice(getIdByProduct.id - 1, 1)
        },

        findEmp(id){
            return this.emp.filter(item => item.id == id)[0]
        },

        updateEmp(id, price){
            const getProductById = this.emp.filter(item => item.id == id)[0]
            getProductById.price = price

            return getProductById
        }
    }
}

const t = products3()

console.log(t.findEmp(1));

