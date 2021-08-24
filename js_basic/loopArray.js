// loop Array 
// For Loop, ForEach , ForOf

const data = [10,20,30,40,50]

// for (let i = 0; i < data.length; i++){
//     if (data[i] >= 30) break
//     console.log(`order ${i + 1} = ${data[i]}`);
// }

data.forEach(element => {   // can't put break or continue
    if (element >= 30){
        console.log("Hello")
    }
    console.log(`order in Array Data = ${element}`);
});

console.log("");

let sum = 0
data.forEach(element => {   // can't put break or continue
    sum += element
    console.log(`summary = ${sum}`);
});

console.log("");

for (const element of data){ // can put break or continue
    if (element >= 30) break
    console.log(`member Array Data = ${element}`);
}