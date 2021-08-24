// Array Filter

const data = [10,20,30,40]

const result = data.filter(e => e >20)

console.log(result);

const dataEmployee = [
    {name: "fluke",salary: 30000,department: "Software-Engineering"},
    {name: "Mookiiz",salary: 40000,department: "Teacher"},
    {name: "Jojo",salary: 23000,department: "Marketing"},
    {name: "Pain",salary: 30000,department: "Marketing"},
    {name: "Bell",salary: 34000,department: "Accountant"}

]

const dataSaraly = dataEmployee.filter(e => e.salary >= 30000).filter(e => e.department === "Marketing")
console.log(dataSaraly);