// let a = 10
// const b = 20
// var c = 30

//var c = 300
// if(true) {
//     let a = 10
//     const b = 20
//     var c = 30
// }

//console.log(a)
//console.log(b)
//console.log(c)

// let a = 300
// if(true) {
//     let a = 10
//     const b = 20
//     console.log("INNER => "  , a)
// }
//console.log(a)



function one(){
    const username = "Ankit"

    function two() {
        const website = "youtube"
        console.log(username)
    }

    //console.log(website)

    two()
}

//one()




if(true) {
    const username = "Ankit"
    if(username) {
        const website = " youtube"
        //console.log(username + website)
    }
    //console.log(website)
}

//console.log(username);




//+++++++++++++++++++++++++++++++++++ interesting++++++++++++++++++++++++++++++++++++

console.log(addOne(5))

function addOne(num) {
    return num + 1
}

// addOne(5)



//addTwo(5)     //  will throw an error 

const addTwo = function(num) {
    return num + 2
}

// addTwo(5)
