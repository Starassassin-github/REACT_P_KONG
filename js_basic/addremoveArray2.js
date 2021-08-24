// splice ,slice
// splice(order to delete, many,insert data at order)
// slice(start order,last order - 1)
/////////////////////////////////// ********splice*******
const data = [10,20,30,40,50,60,70]
console.log(data);
data.splice(1,1)
console.log(data);
data.splice(1,3,999)
console.log(data);
/////////////////////////////////// ********slice********
data.slice(1,3) // index 1,2 [999,60] get by variable
console.log(data);
const lastdata = data.slice(1,3)
console.log(lastdata);
