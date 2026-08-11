import { expect, test, describe } from "bun:test";
import { type } from "express/lib/response";


// fungsi untuk menghitung total harga belanja

function calculateTotal(shoppingCart){
    let total = 0
    let data = null

    // kode ini menampilkan error runtime 

    // for(let i = 0; i <= shoppingCart.length; i++){
    //     total += shoppingCart[i].price
    // }

    try{

        data = shoppingCart.reduce((acc, item) => {
            
            if(typeof item.price !== 'number') throw new Error("Tipe data tidak valid")
            
            return acc + item.price
        },total)
    }
    catch(err){
        console.log(err.message)
    }

    return data;
}

const shoppingCart = [
  { name: 'Apple', price: 300 },
  { name: 'Banana', price: 120 },
  { name: 'Orange', price: 130 },
  { name: 'Watermelon', price: '160' },
  { name: 'Pineapple', price: null },
  { name: 'Grape', price: null },
];

console.log(calculateTotal(shoppingCart))

// fungsi ini akan mrnguji hasil menggunakan unit testing
function addNums(a, b){

    if(typeof a !== 'number'){
        throw new Error("parameter should be number type")
    }

    if(typeof b !== 'number'){
        throw new Error("parameter should be number type")
    }

    return a + b;
}

// describe berfungsi untuk membungkus fungsi testing
describe('Aritmathic Operation', () => {
    // skenarion testing dengan operasi aritmatika berhasil

    test("Test correctly sum two numbers", () => {

        const x = 2;
        const y = 2;

        const expectedValue = x + y 

        expect(addNums(x, y)).toBe(expectedValue)
    });


    // skenario testing jika parameter a bukan tipe number

    test("should thrown error one of parameter is not number", () => {

        const x = 2
        const y = '1'

        expect(() => addNums(x, y)).toThrow()
    })
})