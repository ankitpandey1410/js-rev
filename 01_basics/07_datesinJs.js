//  Date 

// const myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())


// let myCreatedDate = new Date (2023 , 0 , 12)
//let myCreatedDate = new Date (2023 , 0 , 12 , 5 , 10)
//let myCreatedDate = new Date ("2024-02-24")
//let myCreatedDate = new Date ("10-14-2001")
//console.log(myCreatedDate.toLocaleString())

//let myTimeStamp = Date.now()
//console.log(myTimeStamp)
//console.log(myCreatedDate.getTime())

//  converting time to second :-
//console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

newDate.toLocaleString('default' , {
    weekday: "long"
})
