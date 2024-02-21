//  primitive
//  7 types => String,NUmber,Boolean,null,undefined,symbol,bigInt

const score = 100
const scoreValue = 100.5
console.log(typeof scoreValue)
const isLoggedIn = false
const outside = null
console.log(typeof outside)
let useEmail

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigNumber = 1223489523987752345734n
console.log(typeof bigNumber);

//  refrence(non primitive)
//   Array, Objects, Functions

const heros = ["Ram" , "Laxman" , 12 , false]
let myObj = {
    name: "Ankit",
    age: 22
}

const myFunction = function() {
    console.log("Hello world")
}
console.log(typeof myFunction)