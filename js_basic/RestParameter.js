// Rest Parameter
summation = (x, y) => {
    return x + y
}

summation = (x, y,z) => {
    return x + y + z
}

console.log(summation(2,3));
console.log(summation(2,3,23));

restSummation = (...numberArr) => {
    let total = 0
    for( let number of numberArr) total += number // 0 + 3444 + 3353
    return total
}

console.log(restSummation(3444,3352));
console.log(restSummation(3444,3352,6545));
console.log(restSummation(3444,3352,6545,3444));