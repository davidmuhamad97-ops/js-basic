function tambah(a, b) {
    return a + b;
}

/**
 * 
 Pertanyaan:

    1. Apakah function tersebut pure atau impure?
    2. Jelaskan alasannya.
    3. Apakah function tersebut memiliki side effect?

Jawaban: 

    1. Ya fungsi diatas merupakan pure function 
    2. Karena fungsi tersebut tidak memiliki side effect
    3. Tidak memiliki karena hanya bergantung pada parameter atau argumennya sendiri
 * 
 */


let total = 0;

function tambahTotal(value) {
    total += value;
    return total;
}

/**
 * 
 * 
   Pertanyaan:

    1  Pure atau impure?
    2. Apa yang menyebabkan function tersebut menjadi impure?
    3. Apa yang harus diubah agar function tersebut menjadi pure?

  Jawaban : 

    1. Fungsi diatas merupakan impure function
    2. Karena fungsi diatas memiliki side effect yang mengubah nilai variable global
    3. Tidak boleh ada efek samping yang mengubah suatu nilai diluar scope function tersebut
 * 
 */

// mengubah fungsi tambahTotal menjadi impure function
function tambahTotalImpure(value){
    let total = 0
    total += value

    return total
}


function tambahItem(items, item) {
    items.push(item);
    return items;
}

const fruits = ["Apple", "Banana"];

const result = tambahItem(fruits, "Orange");

console.log(result);
console.log(fruits);

/**
 * 
 * 
  Pertanyaan:

    1. Apakah tambahItem() pure atau impure?
    2. Apakah array fruits berubah?
    3. Apakah push() berpengaruh terhadap status pure/impure function?
    4. Ubahlah function tersebut menjadi pure function.



  Jawaban:

   1. Fungsi tersebut merupakan impure fungsi karena memiliki side effect yang mengubah variable global
   2. array tersebut berubah karena pemanggilan fungsi ini merupakan sifat dari mutability
   3. Ya bisa berpengaruh tergantung bagaimana fungsi tersebut menerima argumen atau variable global
 * 
 */

// mengubah fungsi tambahItem menjadi pure function
function tambahItemImpure(items, item){
    items.push(item)
    return [...items]
}
const fruits2 = ["Apple", "Banana"];

const result2 = tambahItem(fruits, "Orange");

console.log(result2);
console.log(fruits2);


// fungsi A
function tambahItem1(items, item) {
    return [...items, item];
}

// fungsi B
function tambahItem2(items, item) {
    items.push(item);
    return items;
}

/**
 * 
 * Pertanyaan:

    Mana yang pure dan mana yang impure?

    Fungsi A
      Fungsi ini merupakan pure function karena tidak memiliki side effect

    Fungsi B
      Fungsi ini merupakan impure function karena memiliki side effect yang dapat mengubah variable diluar scope fungsinya.
 * 
 */

function updateUser(user) {
    user.name = "David";
    return user;
}

const user = {
    name: "John",
    age: 25
};

const resultUpdate = updateUser(user);

console.log(resultUpdate);
console.log(user);

/**
 * 
 * 
 Pertanyaan:

    1. Apakah function tersebut pure atau impure?
    2. Mengapa perubahan property object dapat membuat function menjadi impure?
    3. Buat versi pure function-nya.

 Jawaban: 

   1. Fungsi tersebut merupakan impure function karena memiliki side effect 
   2. Karena object itu sendiri merupakan sebuah tipe referensi sehingga saat pemanggilan fungsi tersebut 
      yang diteruskan adalah referensinya disebut pass by refferenc
 * 
 */

// Buat fungsi tersebut ke dalam bentuk pure function

function updateUserImpure(user) {
    user.name = "David";
    return {...user}
}

const pengguna = {
    name: "John",
    age: 25
};

const resultUpdate2 = updateUserImpure(user);

console.log(resultUpdate2);
console.log(pengguna);


let cart = [];

function addToCart(product) {
    cart.push(product);
}

function removeFromCart(productId) {
    cart = cart.filter(product => product.id !== productId);
}

/**
 * 
  Tugas
    1. Jelaskan mengapa kode tersebut menggunakan impure function.
    2. Ubah addToCart() menjadi pure function.
    3. Ubah removeFromCart() menjadi pure function.
    4. Buat contoh penggunaannya.
  
  Jawaban 

    1. Fungsi memiliki side effect yang mengubah variable cart sehingga disebut impure function.
 * 
 */

// 2. Ubah fungsi addToCart() menjadi pure function
function addToCartImpure(product){
    cart.push(product)
    return [...cart]
}

// 3. Ubah fungsi removeFromCart() menjadi pure function 
function removeFromCart(productId) {
    cart.filter(product => product.id !== productId);

    return [...cart]
}

