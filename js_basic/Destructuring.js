// Destucturing

// Array

const colors = ["green","red","yellow"]
// const green = colors[0]
// const red = colors[1]
// const yellow = colors[2]

// const [green,red,yellow] = colors       \\ ***Destucturing
const [green,,yellow] = colors


console.log(green);
console.log(yellow);

////



///// Destructuring&Object
const product = {
    productName : "Computer",
    price : 30000,
    stock : 10
}

// const productName = product.productName
// const price = product.price
// const stock = product.stock

const {productName: n,price: p,stock: s} = product
// const {productName,price,stock} = product // like function recommand

console.log(n);
console.log(p);
console.log(s);