import {test, expect, describe} from "bun:test"
import {sampleProducts} from "./ListProduct"

function getProducts(products){

    if (products.length === 0){
        throw new Error("Products is empty")
    }

    return products
}


describe("Get Products", () => {
    test("Get Products can't be empty", () => {

        let data = sampleProducts;
        let expectValue =  [
            { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
            { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
            { id: 3, name: 'Shirt', category: 'Apparel', price: 50 },
            { id: 4, name: 'Shoes', category: 'Apparel', price: 80 },
            { id: 5, name: 'Watch', category: 'Accessories', price: 200 },
        ];

        expect(getProducts(data)).toEqual(expectValue)
    })

    test("Product is null so throw error in your code", () => {
        let expectedValue = []

        expect(() => getProducts(expectedValue)).toThrow()
    })
})