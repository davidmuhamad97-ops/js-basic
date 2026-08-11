import { sampleProducts } from "./ListProduct";

function getProductsByCategory(products, category) {
    return products.filter(product => product.category === category);
}

const electronics = getProductsByCategory(sampleProducts, 'Electronics');
console.log('Electronics Products:', electronics);

function findProductById(products, id) {
    return products.filter(product => product.id === id)[0];
}
const product = findProductById(sampleProducts, 3);
console.log('Product with ID 3:', product);

function calculateTotalPrice(products) {
    return products.reduce((acc, item) => {
        return acc + item.price;
    }, 0);
}
const totalPrice = calculateTotalPrice(sampleProducts);
console.log('Total Price of All Products:', totalPrice);

function applyDiscount(products, discount){
    return products.map(item => {
        return item.price = item.price - (item.price * discount / 100);
    })
}

const discountedPrices = applyDiscount(sampleProducts, 10);
console.log('Prices after 10% discount:', discountedPrices);