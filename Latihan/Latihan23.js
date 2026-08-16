function createBankAccount(initialBalance){

    let balance = 0;

    return {
        deposit: function(saldo){
            balance =  saldo + initialBalance
        },

        getBalance : function(){
            return balance
        }
    }
}

const account = createBankAccount(100000);
account.deposit(50000);
console.log(account.getBalance());

function test(){

    let hasil = []

    for (var i = 0; i < 5; i++){
        hasil.push(() => {
            return i;
        })
    }

    return hasil
}

let x = test()
console.log(x[0]())
console.log(x[1]())
console.log(x[2]())