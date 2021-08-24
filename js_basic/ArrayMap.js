// Array Map

const numbers = [10,20,30,40,50]
console.log(numbers);

const result = numbers.map(element => element *2)
console.log(result);
// [10,20,30,40,50]
// [10x2,20x2,30x2,40x2,50x2]
// [20,40,60,80,100]

const data = ["rainning","sunny","wetter","good day","cloudy","foggy","lighting"]

const result2 = data.map((e, i)=> {
    return `day ${i + 1}, weather = ${e}`
})
console.log(result2);

///////// map Array Object
const dataWeather = [
    {day: "01/06/2564", weather:"sunny", temp: 32},
    {day: "02/06/2564", weather:"rainning", temp: 23},
    {day: "03/06/2564", weather:"clouddy", temp: 25}
]

const resultWeather = dataWeather.map(e => e.weather)
console.log(resultWeather);