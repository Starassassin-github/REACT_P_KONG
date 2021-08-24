// Spread Operator

const newArr = [200,350,2666]
const data = [10,20,...newArr]

console.log(data); 

const colors = ["green","blue","white"]
const allColors = ["red","yellow",...colors]

const newColors = ["Black","gray"]
//allColors.push(newColors) // [ 'red', 'yellow', 'green', 'blue', 'white', [ 'Black', 'gray' ] ]
allColors.push(...newColors)
console.log(allColors);