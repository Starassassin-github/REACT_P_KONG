// push , pop , shift , unshift 

////////////////////// ************push**********
const data = [10,20,30]
console.log(data)
data.push(500)
data.push([600,700,800])
data.push(...[900,950,1000])
console.log(data);
///////////////////// *************pop*************
data.pop()
console.log(data);
///////////////////// *************shift**********
data.shift()
console.log(data);
///////////////////// *************unshift********
data.unshift(999)
console.log(data);