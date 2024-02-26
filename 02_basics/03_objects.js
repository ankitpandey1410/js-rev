//  singleton 
//Object.create


//  object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Ankit",
    "full name": "Ankit Kumar",
    [mySym]: "mykey1",
    age: 18,
    location: "Kolkata",
    email: "ankit@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["saturday" , "sunday"]
} 

//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser.full name) =>  will throw an error
//console.log(JsUser["full name"])
//console.log(JsUser[mySym])

//  for changing the value
JsUser.email = "ankit@chatgpt.com"

//  for locking the value
//Object.freeze(JsUser)
JsUser.email = "ankit@microsoft.com"
//console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello Js-User !")
}

console.log(JsUser)
//console.log(JsUser.greeting)
//console.log(JsUser.greeting())

JsUser.greetingTwo = function() {
    console.log(`Hello Js-User ${this.name}`);
}
console.log(JsUser.greetingTwo())

