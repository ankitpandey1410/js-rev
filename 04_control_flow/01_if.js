//  if
//const userLoggedIn = true
const temperature = 41

// if(temperature < 50) {
//     console.log("less than 50")
// }
// else {
//     console.log("temperature is greater than 50")
// }

// console.log("Execute")

//  < , > , <= , >= , == , != , === , !==


const score = 200

// if(score > 100) {
//     let power = "100 Hp"
//     console.log(`User power is : ${power}`)
// }

// console.log(`User power is : ${power}`)


const balance = 1000

//if(balance > 500) console.log("test") , console.log("test2")  

// if(balance < 500) {
//     console.log("less than 500")
// }else if(balance < 750) {
//     console.log("less than 750")
// }else if(balance < 1000) {
//     console.log("less than 1000")
// } else {
//     console.log("less than 1250")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard) {
    console.log("Allow to buy course")
}

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in")
}

