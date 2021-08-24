// Search Array
// indexOf(data) => ผลการค้นหาจะได้ตำแหน่ง index ที่ต้องการค้นเจอ ถ้าค้นไม่เจอจะได้ -1
// find(data) => ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undefined
// findIndex(data) => ผลการค้นหาจะได้ตำแหน่ง Indes ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1

const colors = ["red","green","blue","purple","white"]
const index = colors.indexOf("white")
console.log(index);

const search = colors.find(element => element === "green")
console.log(search);

let search2 = colors.findIndex(element => element === "green")
console.log(search2);