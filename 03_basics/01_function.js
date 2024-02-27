function sayMyName() {
    console.log("A")
    console.log("N")
    console.log("K")
    console.log("I")
    console.log("T")
}

//sayMyName()

// function addTwoNumbers(number1 , number2) {  // parameters
//     console.log(number1 + number2)
// }

//addTwoNumbers(4, 7)    //  arguements


function addTwoNumbers(number1 , number2) {  
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(7 , 8)
//console.log("Result : " , result)

// function loginUserMessage(username) {
//     // if(username == undefined) {
//     //     console.log("Please enter a username")
//     //     return 
//     // }
//     if(!username) {
//         console.log("Please enter a username")
//         return 
//     }
//     return `${username} just logged in`
// }

//console.log(loginUserMessage("Ankit"));
//console.log(loginUserMessage())

function loginUserMessage(username = "Akki") {
    return `${username} just logged in`
}

//console.log(loginUserMessage())
//console.log(loginUserMessage("Bittu"))

// function calculateCartPrice (...num) {      // rest opertor in function 
//     return num
// }

// console.log(calculateCartPrice(200 , 400 , 500))


function calculateCartPrice (val1 , val2 , ...num) {  
    return num
}

//console.log(calculateCartPrice(200 , 400 , 500 , 2000))


const user = {
    username: "ankit",
    price: 999
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

//handleObject(user)
handleObject({
    username: "Sam",
    price: 199
})

const newArray = [200 , 400 , 100 , 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(newArray))
console.log(returnSecondValue([100 , 200 , 600 , 400]))