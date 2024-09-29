//Audrey Tjandra 101420460

//Q1
const gretter = (myArray) => {
    let greetText="hello";
    for(let name of myArray){
        console.log(`${greetText} ${name}`)
    }
}
gretter(['bob', 'bill', 'audrey'])

//Q2

const capitalize=([v1,...rem])=>[v1.toUpperCase(), ...rem].join("")

console.log(capitalize("audrey"))

//Q3
const colors=['red', 'green', 'blue']
const capitalizedColors=colors.map((n)=>capitalize(n))
console.log(capitalizedColors)
//Q4
var values=[1,60,34,30,20,5]
var filterLessThan20=values.filter((n)=>n<20)
console.log(filterLessThan20)
//Q5
var array=[1,2,3,4]
const add=(a,b)=>a+b
const mult=(a,b)=>a*b

var calculateSum=array.reduce(add)
console.log(calculateSum)

var calculateProduct=array.reduce(mult)
console.log(calculateProduct)
//Q6
class Car{
    constructor(model,year){
        this.model=model;
        this.year=year;
    }
    setmodel(n){this.model=n}
    getmodel(){return this.model}
    setyear(n){this.year=n}
    getyear(){return this.year}

    details(){
        return `Model: ${this.model} Engine ${this.year}`
    }

}
class Sedan extends Car{
    constructor(model,year, balance){
        super(model,year)
        this.balance=balance;
    }

    info(){
        return `${this.model} has a balance of $${this.balance}  `
    }

}
const car=new Car('Pontiac Firebird', 1976);
console.log(car.details())

const sedan = new Sedan('Volvo SD', 2018, 30000)
console.log(sedan.info())