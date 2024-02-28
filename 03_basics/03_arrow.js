const user = {
    username: "Rohan",
    price: 1000,

    welcomeMessage: function() {
        console.log(`${this.username} , Welcome to our website`)
        //console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

//console.log(this)


// function chai () {
//     let username = "Ankit"
//     console.log(this.username)
// }

// chai()


// const chai = function () {
//     let username = "Sam"
//     console.log(this.username)
// }

// chai()


// const chai = () => {
//     let username = "Sam"
//     console.log(this)
// }

// chai()


// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

//const addTwo = (num1 , num2) =>  num1 + num2

//const addTwo = (num1 , num2) => (num1 + num2)

const addTwo = (num1 , num2) => ({username: "hitesh"})

console.log(addTwo(4,6))