const sampleProducts = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
  { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
  { id: 3, name: 'Shirt', category: 'Apparel', price: 50 },
  { id: 4, name: 'Shoes', category: 'Apparel', price: 80 },
  { id: 5, name: 'Watch', category: 'Accessories', price: 200 },
];


function getSampleProducts() {
  return sampleProducts;
}

function getProductById(id) {
  return sampleProducts.filter(product => product.id === id)[0];
}

function updateProduct(id, newProduct) {
  let product = getProductById(id);
  
  if (product) {
    product = newProduct;
    return product;
  }

  return null;
}

function deleteProduct(id) {
  
  const getData = sampleProducts.filter(product => product.id !== id);
  return getData;
}

export {sampleProducts, getSampleProducts ,getProductById, updateProduct, deleteProduct};