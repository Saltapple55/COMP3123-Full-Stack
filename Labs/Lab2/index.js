// console.log("hello")
var prompt=require("prompt-sync")({sigint:true})

// var x =10
// let y = 'c'

// var msg=prompt("input your name: ")
// console.log(`Hello`, msg)

// var x=4+5
// console.log(x)
// var a=5
// var b=6
// console.log(b-a)
// console.log(b*a)
// console.log(a/b)
// console.log(Math.pow(a,b))
// var m = prompt("input your mark:")
// switch(m){
//     case 80:
//         console.log("great")
//     default:
//         console.log("nah")
// }
// if(m>=50){
//     console.log("pass")
// }
// else{
//     console.log("fail")
// }

// for (var i=0;i<=5;i++){
//     console.log(i)
// }
// var cars=["bmw", "mazda", "ford"];
// cars.forEach(e=>console.log(e)) 

// function fun1(){console.log("helloo")}
// function fun2(){return "helloo2"
// }
// console.log(fun2())


// function capitalize(s){
//     s=s.trim()
//     sarr=s.split(" ")
//     capped=""
//     for(var i=0;i<sarr.length;i++){
//     capped=capped+sarr[i][0].toUpperCase()+sarr[i].slice(1)+" "
//     }
//     return capped
// }

// function max3(a, b, c){
//     var largest=a;
//     if (a<b){
//         if (b<c) largest= c;
//         else largest=b;
//     }
//     else if (a<c) largest=c;
//     return largest
// }
// console.log(max3 (1,0,1));
// console.log(max3 (0,-10,-20));
// console.log(max3 (1000,510,440));

// function right(s){
//     if(s.length<=3 ) return s
//     var right=s.slice(s.length-3)
//     return right+s.slice(0, s.length-3)
// }
// console.log(right("Python"));
// console.log(right("JavaScript"));
// console.log(right("Hi"));

// function array_max_sum(arr, digits){
//     var max=Number.MIN_SAFE_INTEGER;
//     for(var i =0; i<arr.length-digits+1;i++){
//         var sum=0
//         for(var j=i;j<digits+i;j++){
//             sum=sum+arr[j]
//         }
//         if(sum>max) max=sum
//     }
//     return max
// }
// console.log(array_max_sum([1, 2, 3, 14, 5], 2))
// console.log(array_max_sum([2, 3, 5, 1, 6], 3))
// console.log(array_max_sum([9, 3, 5, 1, 7], 2))



// let price =10
// let Tax= .25
// let total =`Total: ${((price * (1+Tax)).toFixed(3))}`;
// console.log(total)

// const arr =[10,20,30]
// for (let v of arr) console.log(v)

//function expressions

// function myFun(){console.log("Hello")}
// myFun()

// function myFun2(a){return a+2}
// var v=myFun2(3)
// console.log(v)

//Arrow Functions

// var hello = function(){console.log("1. Hello world")}
// hello();
// hello = function(){return "2. Hello world"}
// console.log(hello())
// //can't use arrow function for non-return function!, nc value or variable will be undefined

// hello = () =>{console.log("temp: Hello world")}
// console.log(hello())
// hello = () =>{return "3. Hello world"}
// console.log(hello())

// //arrow function with return value; no need return statement
// hello = () =>"4. Hello world"
// console.log(hello())

// hello = (val) => "Hello "+val
// console.log(hello("Darling"))

// function add(a,b){return a+b}
// const addArrow=(a,b) => a+b;

// let currency =n =>  `$${n}`
// console.log(currency(80))

//Spread Operators

//The javascript spread operator (...) allows us to quickly copy all or part of an existing arr
//spread op used in combo with destructuring

// const arr1=[1,2,3]
// const arr2=[4,5,6]
// const arrComb=[...arr1, ...arr2]
// console.log(arrComb)
// const [v1, v2, ...remain]=arrComb
// console.log(v1,v2, "-", remain)

// var s="hello"
// var arrS=s.split("")
// console.log(arrS)
// s2=arrS.join("")
// console.log(s2)

//Spread operator with functions

// var myarr=[1,8,5,7];
// const addTwoToFirstItem=([v1,...rem])=>v1+2
// console.log("adding to myArr: " + addTwoToFirstItem(myarr))

// function capFC1(s){return s[0].toUpperCase()+s.slice(1)}
// console.log(capFC1("hello"))

// const capFC2=([f1,...rem])=> f1.toUpperCase() +rem.join("")
// console.log(capFC2("hello"))

//Array.prototype.map
//map() creates new array by applying a given function 

// var num=[1,4,9,4,16]
// var sqr=num.map((n)=>Math.sqrt(n))
// console.log(sqr)

// const add3=v=>v+3
// var newnum=num.map((n)=>add3(n))
// console.log(newnum)

//Array.prototype.filter-provides a new array containing what passes the boolean
// var nums=[12,5,8,130,44]
// var isBig=(val)=>val>=100
// var f1=nums.filter(isBig)
// console.log(f1)

// var words=['spray', 'elite', 'exuberant', 'destruction', 'present']
// var r=words.filter((w)=>w.length>6)

// //Array.prototype.reduce() used in array to return a single value from an array after executing callback function
// const arrRed=[10,18,30,41,60]
// const reducer=(t,e)=>t+e
// console.log(arrRed.reduce(reducer))

// //classes

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     setname(n){this.name=n}
//     getname(){return this.name}
//     setage(n){this.age=n}
//     getage(){return this.age}

//     details(){
//         return `${this.name} , ${this.age}`
//     }
// }

//expoerts modules with functions or variables can be stored in an external file