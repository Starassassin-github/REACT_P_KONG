// Array Reduce

const data = [10,20,30,40]

// const mapData = data.map(e => 100)
// const filterData = data.filter(e => e > 20)

// console.log(mapData);  [ 100, 100, 100, 100 ]
// console.log(filterData);  [ 30, 40 ]

// reduce 
// array.reduce(() => {},start) //  value = 0

data.reduce((value, e) => {
    console.log(value);
    const total = e + value
    return total
},0)

// value = 0, 10, 30 ,60, 100 ending program......
// total = (10 + 0) return total = value, (20 + 10) return total = value


const cart = [
    {name: "backpack", price: 500},
    {name: "book", price: 900},
    {name: "photograp", price: 5000}
    
]
const summation = cart.reduce((value, e) => e.price + value,0)

console.log(`Paid : ${summation} Baht`);
