// let myName = "Ankit     "
// let myChannel = "chai    "

// console.log(myName.trueLength);


let myHeros = ["thor" , "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
}

Object.prototype.ankit = function () {
    console.log('Ankit is present in all objects');
}

Array.prototype.heyAnkit = function () {
    console.log(`Ankit says hello`);
}

// heroPower.ankit()
// myHeros.ankit()

//myHeros.heyAnkit()
// heroPower.heyAnkit()


//  inheritance

const user = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {   
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

//  Modern Syntax
Object.setPrototypeOf(TeachingSupport , Teacher)

let anotherUsername = "ChaiAurCode   "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength()