const accountId = 1232325
let accountEmail = "abc@gmail.com"
var accountPassword = "123456"
accountCity = "jaipur"
let accountState;

//  accountId = 1234211 :- not allowed
//console.log(accountId)


accountEmail = "defgc@gmail.com"
accountPassword = "123421"
acoountCity = "Howroh"

/*
prefer not to use var because of issue in block scope  and functional scope
*/
console.table([accountEmail , accountPassword , accountCity , accountState])
