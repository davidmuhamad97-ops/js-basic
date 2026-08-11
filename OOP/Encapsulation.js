class BankAccount{

    constructor(nasabah, saldo){
        this.nasabah = nasabah
        this.saldo = saldo
    }

    getSaldo(){
        return `Saldo ${this.nasabah} sebesar ${this.saldo}`
    }
}

let nasabah1 = new BankAccount("agus", 1200000)

// ubah property saldo 
nasabah1.saldo = 1000

console.log(nasabah1.getSaldo())

// Encapsulation memastikan bahwa data atau property class tidak dapat diubah secara langsung
// sehingga perlu diubah sebagai private

// mendefinisikan class encapsulation

class BankAccountEncaps{

    // mendefinisikan property private
    #nasabah
    #saldo

    constructor(nasabah, saldo){
        this.#nasabah = nasabah
        this.#saldo = saldo
    }

    // set adalah method untuk mengatur nilai property sehingga dapat diakses tanpa 
    // langsung mengakses property class nya.
    
    set nasabahBank(nasabah){
        this.#nasabah = nasabah
    }

    set saldoBank(saldo){
        this.#saldo = saldo
    }

    // get adalah method untuk mengembalikan nilai property class sehingga tidak diakses 
    // secara langsung diluar class 
    
    get nasabahBank(){
        return this.#nasabah
    }

    get saldoBank(){
        return this.#saldo
    }

}

let user = new BankAccountEncaps("Rudy", 12000)

// akses property menggunakan method accessor dan mutator
console.log("Nama nasabah " + user.nasabahBank)
console.log("Saldo = Rp." + user.saldoBank)

// ubah property menggunakan method accessor dan mutator

user.nasabahBank = "Rudy emot"
user.saldoBank = 210000

console.log("Nama nasabah " + user.nasabahBank)
console.log("Saldo = Rp." + user.saldoBank)

