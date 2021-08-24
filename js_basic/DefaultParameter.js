// Default Parameter
getDataCustomer = (customerName, customerAddress="Bangkok") => {
    // if (!customerAddress){
    //     customerAddress = "Bangkok"
    // }
    
    const address = `CustomerName: ${customerName}
    address : ${customerAddress}`
    return address
}

console.log(getDataCustomer("WatDhaFlukz", "chon"));
console.log(getDataCustomer("FlukzDhaWat"));